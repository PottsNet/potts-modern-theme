<?php

/**
 * Potts Modern Theme for webtrees 2.2.
 *
 * A standalone modern heritage theme for webtrees.
 *
 * It uses webtrees' common theme foundation but does not inherit from,
 * import or load any built-in visual theme such as Xenea.
 */

declare(strict_types=1);

namespace PottsModernTheme;

use Fisharebest\Webtrees\Auth;
use Fisharebest\Webtrees\Http\Exceptions\HttpAccessDeniedException;
use Fisharebest\Webtrees\I18N;
use Fisharebest\Localization\Translation;
use Fisharebest\Webtrees\Module\AbstractModule;
use Fisharebest\Webtrees\Module\ModuleConfigInterface;
use Fisharebest\Webtrees\Module\ModuleConfigTrait;
use Fisharebest\Webtrees\Module\ModuleCustomInterface;
use Fisharebest\Webtrees\Module\ModuleCustomTrait;
use Fisharebest\Webtrees\Module\ModuleThemeInterface;
use Fisharebest\Webtrees\Module\ModuleThemeTrait;
use Fisharebest\Webtrees\Registry;
use Fisharebest\Webtrees\Validator;
use Fisharebest\Webtrees\View;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use function array_key_exists;
use function base64_encode;
use function file_get_contents;
use function implode;
use function is_array;
use function is_readable;
use function file_exists;
use function is_string;
use function json_encode;
use function redirect;
use function route;
use function str_replace;

use const JSON_HEX_AMP;
use const JSON_HEX_APOS;
use const JSON_HEX_QUOT;
use const JSON_HEX_TAG;
use const JSON_UNESCAPED_SLASHES;

final class PottsModernTheme extends AbstractModule implements ModuleThemeInterface, ModuleCustomInterface, ModuleConfigInterface
{
    use ModuleThemeTrait;
    use ModuleCustomTrait;
    use ModuleConfigTrait;

    /** @var array<string,string> */
    private const DEFAULTS = [
        'PALETTE'              => 'heritage',
        'TEXT_SIZE'            => 'standard',
        'FONT_WEIGHT'          => 'standard',
        'CORNERS'              => 'soft',
        'SHADOWS'              => 'soft',
        'PAGE_WIDTH'           => 'standard',
        'CONTENT_SPACING'      => 'comfortable',
        'SIDEBAR_WIDTH'        => 'standard',
        'NAV_ICON_SIZE'        => 'standard',
        'NAV_DISPLAY'          => 'icons_labels',
        'SHOW_PHOTO_STRIP'     => '1',
        'SHOW_SUBMENU_ICONS'   => '1',
        'SHOW_EVENT_ICONS'     => '1',
        'LARGE_CONTROLS'       => '0',
        'HIGH_CONTRAST'        => '0',
        'REDUCED_MOTION'       => '0',
        'POTTS_EXPERIENCE'      => '1',
        'HOMEPAGE_STYLE'        => 'storytelling',
        'SHOW_WELCOME_PANEL'    => '1',
        'SHOW_HOME_SEARCH'      => '1',
        'SHOW_HOME_QUICK_LINKS' => '1',
        'HERO_INTEGRATION'      => '1',
        'WELCOME_HEADING'       => '',
        'WELCOME_TEXT'          => 'Discover the people, places and stories that shaped our family.',
    ];

    private const CUSTOM_VERSION = '1.4.0-alpha.10';
    private const LATEST_VERSION_URL = 'https://raw.githubusercontent.com/PottsNet/potts-modern-theme/main/latest-version.txt';

    public function title(): string
    {
        return I18N::translate('Potts Modern');
    }

    public function description(): string
    {
        return I18N::translate('A modern, responsive heritage theme for webtrees.');
    }

    public function isEnabledByDefault(): bool
    {
        return false;
    }

    public function customModuleVersion(): string
    {
        return self::CUSTOM_VERSION;
    }

    public function customModuleLatestVersion(): string
    {
        return Registry::cache()->file()->remember(
            $this->name() . '-latest-version',
            function (): string {
                $latest = trim((string) @file_get_contents(self::LATEST_VERSION_URL));

                if (preg_match('/^v?(\d+\.\d+\.\d+(?:[-+][A-Za-z0-9.\-]+)?)$/', $latest, $match) === 1) {
                    return $match[1];
                }

                return $this->customModuleVersion();
            },
            86400
        );
    }

    public function customModuleLatestVersionUrl(): string
    {
        return self::LATEST_VERSION_URL;
    }

    public function customModuleAuthorName(): string
    {
        return 'Jason Potts';
    }

    public function customModuleSupportUrl(): string
    {
        return 'https://github.com/PottsNet/potts-modern-theme/issues';
    }

    /** @return array<string,string> */
    public function customTranslations(string $language): array
    {
        $file = $this->resourcesFolder() . 'lang/' . $language . '.mo';

        return file_exists($file) ? (new Translation($file))->asArray() : [];
    }

    public function resourcesFolder(): string
    {
        return __DIR__ . '/resources/';
    }

    /**
     * This method is called only for the selected theme.
     */
    public function boot(): void
    {
        View::registerNamespace('potts-modern', $this->resourcesFolder() . 'views/');
        View::registerCustomView('::components/menu-item', 'potts-modern::components/menu-item');
        View::registerCustomView('::tree-page', 'potts-modern::tree-page');
        View::registerCustomView('::individual-page', 'potts-modern::individual-page');
        View::registerCustomView('::individual-page-tabs', 'potts-modern::individual-page-tabs');

        View::pushunique('styles');
        echo $this->iconStyle();
        echo $this->settingsStyle();
        View::endpushunique();

        View::pushunique('javascript');
        echo $this->enhancementScripts();
        View::endpushunique();
    }

    /**
     * Load Potts Modern's bundled webtrees-compatible foundation and its own CSS.
     * The foundation is stored inside this module, so the theme does not inherit
     * from or load Xenea (or any other installed theme) at runtime.
     *
     * @return array<string>
     */
    public function stylesheets(): array
    {
        return [
            $this->assetUrl('css/foundation.min.css'),
            $this->assetUrl('css/theme.css'),
        ];
    }

    public function bootstrapColorScheme(): string
    {
        return 'light';
    }

    public function getAdminAction(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdministrator($request);
        $this->layout = 'layouts/administration';

        // Theme boot() runs only when Potts Modern is selected. Administrators
        // must still be able to open its settings while another theme is active.
        View::registerNamespace('potts-modern', $this->resourcesFolder() . 'views/');

        return $this->viewResponse('potts-modern::admin/settings', [
            'title'       => I18N::translate('Potts Modern theme settings'),
            'action_url'  => route('module', [
                'module' => $this->name(),
                'action' => 'Admin',
            ]),
            'settings'    => $this->settings(),
            'choices'     => $this->settingChoices(),
            'saved'       => Validator::queryParams($request)->boolean('saved', false),
            'reset'       => Validator::queryParams($request)->boolean('reset', false),
            'version'     => $this->customModuleVersion(),
        ]);
    }

    public function postAdminAction(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdministrator($request);

        $parsed = $request->getParsedBody();
        $data   = is_array($parsed) ? $parsed : [];
        $task   = isset($data['task']) && is_string($data['task']) ? $data['task'] : 'save';

        if ($task === 'reset') {
            foreach (self::DEFAULTS as $key => $value) {
                $this->setPreference($key, $value);
            }

            foreach (['WELCOME_HEADING', 'WELCOME_TEXT'] as $key) {
            $field = strtolower($key);
            $value = isset($data[$field]) && is_string($data[$field]) ? trim($data[$field]) : self::DEFAULTS[$key];
            $this->setPreference($key, $value);
        }

        return redirect(route('module', [
                'module' => $this->name(),
                'action' => 'Admin',
                'reset'  => '1',
            ]));
        }

        foreach ($this->settingChoices() as $key => $choices) {
            $field = strtolower($key);
            $value = isset($data[$field]) && is_string($data[$field]) ? $data[$field] : self::DEFAULTS[$key];

            if (!array_key_exists($value, $choices)) {
                $value = self::DEFAULTS[$key];
            }

            $this->setPreference($key, $value);
        }

        foreach (['SHOW_PHOTO_STRIP', 'SHOW_SUBMENU_ICONS', 'SHOW_EVENT_ICONS', 'LARGE_CONTROLS', 'HIGH_CONTRAST', 'REDUCED_MOTION', 'POTTS_EXPERIENCE', 'SHOW_WELCOME_PANEL', 'SHOW_HOME_SEARCH', 'SHOW_HOME_QUICK_LINKS', 'HERO_INTEGRATION'] as $key) {
            $field = strtolower($key);
            $value = isset($data[$field]) && (string) $data[$field] === '1' ? '1' : '0';
            $this->setPreference($key, $value);
        }

        foreach (['WELCOME_HEADING', 'WELCOME_TEXT'] as $key) {
            $field = strtolower($key);
            $value = isset($data[$field]) && is_string($data[$field]) ? trim($data[$field]) : self::DEFAULTS[$key];
            $this->setPreference($key, $value);
        }

        return redirect(route('module', [
            'module' => $this->name(),
            'action' => 'Admin',
            'saved'  => '1',
        ]));
    }

    private function assertAdministrator(ServerRequestInterface $request): void
    {
        $user = Validator::attributes($request)->user();

        if (!Auth::isAdmin($user)) {
            throw new HttpAccessDeniedException();
        }
    }

    /** @return array<string,string> */
    private function settings(): array
    {
        $settings = [];

        foreach (self::DEFAULTS as $key => $default) {
            $value = $this->getPreference($key, $default);

            if (isset($this->settingChoices()[$key]) && !array_key_exists($value, $this->settingChoices()[$key])) {
                $value = $default;
            }

            if (in_array($key, ['SHOW_PHOTO_STRIP', 'SHOW_SUBMENU_ICONS', 'SHOW_EVENT_ICONS', 'LARGE_CONTROLS', 'HIGH_CONTRAST', 'REDUCED_MOTION', 'POTTS_EXPERIENCE', 'SHOW_WELCOME_PANEL', 'SHOW_HOME_SEARCH', 'SHOW_HOME_QUICK_LINKS', 'HERO_INTEGRATION'], true)) {
                $value = $value === '1' ? '1' : '0';
            }

            $settings[$key] = $value;
        }

        return $settings;
    }

    /** @return array<string,array<string,string>> */
    private function settingChoices(): array
    {
        return [
            'PALETTE' => [
                'heritage'   => I18N::translate('Potts green and parchment'),
                'ocean'      => I18N::translate('Ocean blue and mist'),
                'claret'     => I18N::translate('Burgundy and archival ivory'),
                'purple'     => I18N::translate('Heritage purple and lilac'),
                'slate'      => I18N::translate('Slate and silver'),
                'teal'       => I18N::translate('Teal and sea glass'),
                'sandstone'  => I18N::translate('Sandstone and walnut'),
            ],
            'TEXT_SIZE' => [
                'standard' => I18N::translate('Standard'),
                'large'    => I18N::translate('Larger'),
            ],
            'FONT_WEIGHT' => [
                'light'    => I18N::translate('Light'),
                'standard' => I18N::translate('Standard'),
                'bold'     => I18N::translate('Bold'),
            ],
            'CORNERS' => [
                'soft'     => I18N::translate('Soft and rounded'),
                'moderate' => I18N::translate('Moderately rounded'),
                'square'   => I18N::translate('Mostly square'),
            ],
            'SHADOWS' => [
                'soft'   => I18N::translate('Soft'),
                'strong' => I18N::translate('Stronger'),
                'none'   => I18N::translate('None'),
            ],
            'PAGE_WIDTH' => [
                'standard' => I18N::translate('Standard'),
                'wide'     => I18N::translate('Wide'),
                'full'     => I18N::translate('Full width'),
            ],
            'CONTENT_SPACING' => [
                'compact'     => I18N::translate('Compact'),
                'comfortable' => I18N::translate('Comfortable'),
                'spacious'    => I18N::translate('Spacious'),
            ],
            'SIDEBAR_WIDTH' => [
                'compact'  => I18N::translate('Compact'),
                'standard' => I18N::translate('Standard'),
                'wide'     => I18N::translate('Wide'),
            ],
            'NAV_ICON_SIZE' => [
                'compact'  => I18N::translate('Compact'),
                'standard' => I18N::translate('Standard'),
                'large'    => I18N::translate('Large'),
            ],
            'HOMEPAGE_STYLE' => [
                'storytelling' => I18N::translate('Storytelling'),
                'classic'      => I18N::translate('Classic blocks'),
                'compact'      => I18N::translate('Compact dashboard'),
            ],
            'NAV_DISPLAY' => [
                'icons_labels' => I18N::translate('Icons and labels'),
                'labels_only'  => I18N::translate('Labels only'),
            ],
        ];
    }

    private function settingsStyle(): string
    {
        $settings = $this->settings();

        $palettes = [
            'heritage' => [
                'bg' => '#edf1e9', 'bg2' => '#fbfcf7', 'ink' => '#26352e', 'muted' => '#66736c',
                'blue' => '#416b56', 'blue_dark' => '#203e34', 'gold' => '#a88a52', 'green' => '#55715e',
                'header1' => '#203e34', 'header2' => '#416b56',
            ],
            'ocean' => [
                'bg' => '#eaf1f6', 'bg2' => '#fbfdff', 'ink' => '#20313d', 'muted' => '#61727e',
                'blue' => '#246f98', 'blue_dark' => '#17455f', 'gold' => '#b18b45', 'green' => '#4f746c',
                'header1' => '#17455f', 'header2' => '#246f98',
            ],
            'claret' => [
                'bg' => '#f2ece8', 'bg2' => '#fffaf4', 'ink' => '#342b2d', 'muted' => '#74676a',
                'blue' => '#743c4a', 'blue_dark' => '#4d2731', 'gold' => '#aa8954', 'green' => '#66745f',
                'header1' => '#4d2731', 'header2' => '#743c4a',
            ],
            'purple' => [
                'bg' => '#f1edf5', 'bg2' => '#fdfbff', 'ink' => '#302b38', 'muted' => '#6d6676',
                'blue' => '#6b4f83', 'blue_dark' => '#453355', 'gold' => '#b08a4d', 'green' => '#657363',
                'header1' => '#453355', 'header2' => '#6b4f83',
            ],
            'slate' => [
                'bg' => '#edf0f2', 'bg2' => '#fcfdfe', 'ink' => '#29343b', 'muted' => '#67737a',
                'blue' => '#536b78', 'blue_dark' => '#344650', 'gold' => '#a9864b', 'green' => '#607268',
                'header1' => '#344650', 'header2' => '#536b78',
            ],
            'teal' => [
                'bg' => '#eaf3f1', 'bg2' => '#fbfefd', 'ink' => '#203633', 'muted' => '#607672',
                'blue' => '#2c786f', 'blue_dark' => '#194c47', 'gold' => '#af8b45', 'green' => '#4f7564',
                'header1' => '#194c47', 'header2' => '#2c786f',
            ],
            'sandstone' => [
                'bg' => '#eee4d3', 'bg2' => '#fffaf1', 'ink' => '#3d3026', 'muted' => '#786a5d',
                'blue' => '#765038', 'blue_dark' => '#4e3424', 'gold' => '#b27b33', 'green' => '#68745a',
                'header1' => '#4a3022', 'header2' => '#765038',
            ],
        ];

        $page_widths = ['standard' => '1260px', 'wide' => '1480px', 'full' => '100%'];
        $radii = [
            'soft' => ['large' => '20px', 'small' => '12px'],
            'moderate' => ['large' => '13px', 'small' => '8px'],
            'square' => ['large' => '3px', 'small' => '2px'],
        ];
        $shadows = [
            'soft' => ['large' => '0 18px 46px rgba(35,48,56,.13)', 'small' => '0 10px 28px rgba(35,48,56,.09)'],
            'strong' => ['large' => '0 22px 58px rgba(35,48,56,.22)', 'small' => '0 13px 34px rgba(35,48,56,.16)'],
            'none' => ['large' => 'none', 'small' => 'none'],
        ];
        $spacing = [
            'compact' => ['gap' => '.75rem', 'pad' => '.82rem'],
            'comfortable' => ['gap' => '1rem', 'pad' => '1rem'],
            'spacious' => ['gap' => '1.35rem', 'pad' => '1.25rem'],
        ];
        $sidebars = ['compact' => '310px', 'standard' => '370px', 'wide' => '430px'];
        $icons = ['compact' => '22px', 'standard' => '27px', 'large' => '34px'];
        $weights = [
            'light' => ['heading' => '650', 'navigation' => '600', 'label' => '600', 'emphasis' => '600'],
            'standard' => ['heading' => '800', 'navigation' => '700', 'label' => '700', 'emphasis' => '700'],
            'bold' => ['heading' => '850', 'navigation' => '800', 'label' => '750', 'emphasis' => '750'],
        ];

        $palette = $palettes[$settings['PALETTE']];
        $radius = $radii[$settings['CORNERS']];
        $shadow = $shadows[$settings['SHADOWS']];
        $space = $spacing[$settings['CONTENT_SPACING']];
        $font_size = $settings['TEXT_SIZE'] === 'large' ? '17.2px' : '16px';
        $weight = $weights[$settings['FONT_WEIGHT']];

        $css = ':root{' .
            '--potts-bg:' . $palette['bg'] . ';' .
            '--potts-bg-2:' . $palette['bg2'] . ';' .
            '--potts-ink:' . $palette['ink'] . ';' .
            '--potts-muted:' . $palette['muted'] . ';' .
            '--potts-blue:' . $palette['blue'] . ';' .
            '--potts-blue-dark:' . $palette['blue_dark'] . ';' .
            '--potts-gold:' . $palette['gold'] . ';' .
            '--potts-green:' . $palette['green'] . ';' .
            '--potts-radius:' . $radius['large'] . ';' .
            '--potts-radius-sm:' . $radius['small'] . ';' .
            '--potts-shadow:' . $shadow['large'] . ';' .
            '--potts-shadow-soft:' . $shadow['small'] . ';' .
            '--potts-page-width:' . $page_widths[$settings['PAGE_WIDTH']] . ';' .
            '--potts-setting-gap:' . $space['gap'] . ';' .
            '--potts-setting-pad:' . $space['pad'] . ';' .
            '--potts-sidebar-width:' . $sidebars[$settings['SIDEBAR_WIDTH']] . ';' .
            '--potts-nav-icon-size:' . $icons[$settings['NAV_ICON_SIZE']] . ';' .
            '--potts-font-size:' . $font_size . ';' .
            '--potts-weight-heading:' . $weight['heading'] . ';' .
            '--potts-weight-navigation:' . $weight['navigation'] . ';' .
            '--potts-weight-label:' . $weight['label'] . ';' .
            '--potts-weight-emphasis:' . $weight['emphasis'] . ';' .
            '}' .
            'html body,html body button,html body input,html body select,html body textarea{font-size:var(--potts-font-size)!important;}' .
            'html body :is(h1,h2,h3,h4,h5,h6,.wt-page-title,.card-title,.modal-title,.potts-preview-title){font-weight:var(--potts-weight-heading)!important;}' .
            'html body :is(.wt-genealogy-menu,.wt-user-menu,.potts-nav-feature-link,.potts-submenu-item,.nav-link,.dropdown-item,.potts-nav-label,.potts-submenu-label){font-weight:var(--potts-weight-navigation)!important;}' .
            'html body :is(label,.form-label,.col-form-label,.wt-page-options-label,th,.table th){font-weight:var(--potts-weight-label)!important;}' .
            'html body :is(label,.form-label,.col-form-label,.wt-page-options-label,th,.table th){font-weight:var(--potts-weight-label)!important;}' .
            'html body :is(strong,b,.fw-bold){font-weight:var(--potts-weight-emphasis)!important;}' .
            'body>header,header[role="banner"],.wt-header-wrapper,#header,#top-header{background:linear-gradient(135deg,' . $palette['header1'] . ' 0%, ' . $palette['header2'] . ' 100%)!important;}' .
            'body.wt-control-panel>header>.nav>.nav-item>.nav-link{color:#fff!important;text-decoration:none!important;}' .
            'body.wt-control-panel>header>.nav>.nav-item>.nav-link:is(:hover,:focus-visible,.show){color:#fff!important;background:rgba(255,255,255,.13)!important;}' .
            'body.wt-control-panel>header>.nav>.nav-item>.dropdown-toggle::after{border-top-color:currentColor!important;}' .
            '.potts-nav-icon{width:var(--potts-nav-icon-size)!important;height:var(--potts-nav-icon-size)!important;}' .
            '.potts-home-content,.potts-dashboard-content{gap:var(--potts-setting-gap)!important;}' .
            '.wt-block-content,.wt-side-block-content,.card-body,.blockcontent,.block-content{padding:var(--potts-setting-pad)!important;}' .
            '@media(min-width:992px){.wt-individual-page .wt-sidebar-content{flex:0 0 var(--potts-sidebar-width)!important;max-width:var(--potts-sidebar-width)!important;width:var(--potts-sidebar-width)!important;}.wt-individual-page .wt-main-content{flex:1 1 0!important;max-width:calc(100% - var(--potts-sidebar-width) - 1.5rem)!important;}}';

        if ($settings['SHOW_PHOTO_STRIP'] !== '1') {
            $css .= '.wt-photo-strip,.wt-random-media,.wt-media-strip,#random-media,#random_media,#random-media-block,#random_media_block,#media-strip,#photo-strip,.random-media,.random_media,.media-strip,.photo-strip,.potts-photo-ribbon{display:none!important;}';
        }

        if ($settings['NAV_DISPLAY'] === 'labels_only') {
            $css .= '.potts-nav-feature>.potts-nav-feature-link .potts-nav-icon{display:none!important;}.potts-nav-feature>.potts-nav-feature-link{min-width:auto!important;padding-inline:1rem!important;}';
        }

        if ($settings['SHOW_SUBMENU_ICONS'] !== '1') {
            $css .= '.potts-nav-dropdown .potts-submenu-icon{display:none!important;}';
        }

        if ($settings['SHOW_EVENT_ICONS'] !== '1') {
            $css .= '.potts-modern-fact-icon{display:none!important;}';
        }

        if ($settings['LARGE_CONTROLS'] === '1') {
            $css .= 'html body :is(button,.btn,input,select,textarea,.form-control,.form-select){min-height:48px;}html body input[type="checkbox"],html body input[type="radio"]{min-height:auto;transform:scale(1.18);margin:.15rem .35rem;}';
        }

        if ($settings['HIGH_CONTRAST'] === '1') {
            $css .= 'html body{--potts-line:rgba(20,31,36,.28);--potts-card:rgba(255,255,255,.99);--potts-card-solid:#fff;}html body a{text-decoration-thickness:.13em!important;}html body :focus-visible{outline:3px solid var(--potts-gold)!important;outline-offset:3px!important;}';
        }

        if ($settings['REDUCED_MOTION'] === '1') {
            $css .= 'html{scroll-behavior:auto!important;}*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important;}';
        }

        if ($settings['POTTS_EXPERIENCE'] === '1') {
            $css .= '.potts-homepage .wt-block,.potts-homepage .card,.potts-homepage .wt-side-block{border-radius:var(--potts-radius)!important;box-shadow:var(--potts-shadow-soft)!important;border:1px solid color-mix(in srgb,var(--potts-blue) 16%,transparent)!important;overflow:hidden;}.potts-homepage .wt-block-header,.potts-homepage .card-header{background:linear-gradient(135deg,color-mix(in srgb,var(--potts-blue) 10%,#fff),color-mix(in srgb,var(--potts-gold) 8%,#fff))!important;}';
        }

        $css .= '.potts-homepage{display:flex;flex-direction:column;gap:var(--potts-setting-gap);}.potts-home-intro{position:relative;overflow:hidden;padding:clamp(1.15rem,3vw,2.25rem);border:1px solid color-mix(in srgb,var(--potts-blue) 20%,transparent);border-radius:var(--potts-radius);background:linear-gradient(135deg,var(--potts-bg-2),color-mix(in srgb,var(--potts-bg) 82%,#fff));box-shadow:var(--potts-shadow-soft);}.potts-home-intro::after{content:"";position:absolute;right:-4rem;top:-5rem;width:15rem;height:15rem;border-radius:50%;background:color-mix(in srgb,var(--potts-gold) 14%,transparent);pointer-events:none;}.potts-home-intro-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,.62fr);gap:1.25rem;align-items:center;}.potts-home-kicker{margin:0 0 .35rem;color:var(--potts-blue);font-weight:var(--potts-weight-navigation);letter-spacing:.08em;text-transform:uppercase;font-size:.78rem;}.potts-home-heading{margin:0 0 .45rem;color:var(--potts-ink);font-weight:var(--potts-weight-heading);font-size:clamp(1.55rem,3vw,2.45rem);}.potts-home-copy{margin:0;color:var(--potts-muted);font-size:1.05rem;max-width:62ch;}.potts-home-search{padding:.85rem;border-radius:var(--potts-radius-sm);background:rgba(255,255,255,.84);border:1px solid color-mix(in srgb,var(--potts-blue) 14%,transparent);}.potts-home-search label{display:block;margin-bottom:.4rem;color:var(--potts-ink);font-weight:var(--potts-weight-label);}.potts-homepage-style-compact .potts-home-blocks>.row{--bs-gutter-x:.85rem;--bs-gutter-y:.85rem;}.potts-homepage-style-compact .wt-block-content,.potts-homepage-style-compact .card-body{padding:.78rem!important;}.potts-homepage-style-classic .potts-home-intro{box-shadow:none;}.potts-home-hero-host{order:-2;width:100%;}.potts-home-hero-host>*{margin-bottom:0!important;}.potts-home-empty-column{display:none!important;}@media(max-width:767.98px){.potts-home-intro-grid{grid-template-columns:1fr;}.potts-home-intro{padding:1rem;}}';

        return "\n<style id=\"potts-modern-theme-settings\">" . $css . "</style>\n";
    }

    private function iconStyle(): string
    {
        $declarations = [];

        foreach ($this->iconFiles() as $name => $filename) {
            $file = $this->resourcesFolder() . 'icons/' . $filename;

            if (!is_readable($file)) {
                continue;
            }

            $svg = file_get_contents($file);

            if ($svg === false || $svg === '') {
                continue;
            }

            $declarations[] = '--potts-icon-' . $name . ': url("data:image/svg+xml;base64,' . base64_encode($svg) . '");';
        }

        if ($declarations === []) {
            return '';
        }

        return "\n<style id=\"potts-modern-theme-icons\">:root{\n  " . implode("\n  ", $declarations) . "\n}</style>\n";
    }

    private function enhancementScripts(): string
    {
        $icons = [];

        foreach ($this->iconFiles() as $name => $filename) {
            $file = $this->resourcesFolder() . 'icons/' . $filename;

            if (!is_readable($file)) {
                continue;
            }

            $svg = file_get_contents($file);

            if ($svg === false || $svg === '') {
                continue;
            }

            $icons[$name] = 'data:image/svg+xml;base64,' . base64_encode($svg);
        }

        $icons_json = json_encode(
            $icons,
            JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT
        );
        $settings_json = json_encode(
            $this->settings(),
            JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT
        );
        $labels_json = json_encode(
            [
                'menu'             => I18N::translate('Menu'),
                'openMenu'         => I18N::translate('Open menu'),
                'closeMenu'        => I18N::translate('Close menu'),
                'explore'          => I18N::translate('Explore'),
                'accountSettings'  => I18N::translate('Account and settings'),
                'signIn'           => I18N::translate('Sign in'),
                'signOut'          => I18N::translate('Sign out'),
                'showMoreEvents'   => I18N::translate('Show more events'),
                'showFewerEvents'  => I18N::translate('Show fewer events'),
            ],
            JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT
        );
        $placeholder_urls = [];

        foreach ([
            'male'         => 'silhouette-male.webp',
            'female'       => 'silhouette-female.webp',
            'chartMale'    => 'chart-silhouette-male.svg',
            'chartFemale'  => 'chart-silhouette-female.svg',
            'chartUnknown' => 'chart-silhouette-unknown.svg',
        ] as $gender => $filename) {
            $file = $this->resourcesFolder() . 'images/' . $filename;

            if (!is_readable($file)) {
                continue;
            }

            $image = file_get_contents($file);

            if ($image === false || $image === '') {
                continue;
            }

            $extension = strtolower((string) pathinfo($filename, PATHINFO_EXTENSION));
            $mime      = match ($extension) {
                'svg'   => 'image/svg+xml',
                'webp'  => 'image/webp',
                default => 'image/png',
            };

            // Use embedded data URLs here. boot() runs before the PSR-7 request
            // is available, so generating a module asset route at this point
            // causes the container to try to instantiate ServerRequestInterface.
            $placeholder_urls[$gender] = 'data:' . $mime . ';base64,' . base64_encode($image);
        }

        $placeholders_json = json_encode(
            $placeholder_urls,
            JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT
        );

        if ($icons_json === false) {
            $icons_json = '{}';
        }
        if ($settings_json === false) {
            $settings_json = '{}';
        }
        if ($labels_json === false) {
            $labels_json = '{}';
        }
        if ($placeholders_json === false) {
            $placeholders_json = '{}';
        }

        $fix_file    = $this->resourcesFolder() . 'js/alpha9-fixes.js';
        $fix_script  = is_readable($fix_file) ? file_get_contents($fix_file) : false;
        $script_file = $this->resourcesFolder() . 'js/theme.js';
        $script      = is_readable($script_file) ? file_get_contents($script_file) : false;

        $config = "\n<script id=\"potts-modern-theme-config\">window.PottsModernThemeIcons=" . $icons_json . ';window.PottsModernThemeSettings=' . $settings_json . ';window.PottsModernThemeLabels=' . $labels_json . ';window.PottsModernThemePlaceholders=' . $placeholders_json . ";</script>\n";
        $fix    = '';

        if ($fix_script !== false && $fix_script !== '') {
            $fix_script = str_replace('</script', '<\/script', $fix_script);
            $fix = "<script id=\"potts-modern-theme-alpha9-fixes\">\n" . $fix_script . "\n</script>\n";
        }

        if ($script === false || $script === '') {
            return $config . $fix;
        }

        $script = str_replace('</script', '<\/script', $script);

        return $config . $fix . "<script id=\"potts-modern-theme-script\">\n" . $script . "\n</script>\n";
    }
    /** @return array<string,string> */
    private function iconFiles(): array
    {
        return [
            'family-tree' => 'family-tree.svg',
            'charts'      => 'charts.svg',
            'lists'       => 'lists.svg',
            'calendar'    => 'calendar.svg',
            'reports'     => 'reports.svg',
            'cart'        => 'cart.svg',
            'search'      => 'search.svg',
            'stories'     => 'stories.svg',
            'books'       => 'books.svg',
            'more-charts' => 'more-charts.svg',
            'your-book'   => 'your-book.svg',
            'faq'         => 'faq.svg',
            'branches'    => 'branches.svg',
            'person'      => 'person.svg',
            'family'      => 'family.svg',
            'media'       => 'media.svg',
            'place'       => 'place.svg',
            'repository'  => 'repository.svg',
            'note'        => 'note.svg',
            'source'      => 'source.svg',
            'submitter'   => 'submitter.svg',
            'event'       => 'event.svg',
            'module'      => 'module.svg',
            'ancestors'        => 'ancestors.svg',
            'compact-tree'     => 'compact-tree.svg',
            'descendants'      => 'descendants.svg',
            'family-book'      => 'family-book.svg',
            'fan-chart'        => 'fan-chart.svg',
            'hourglass'        => 'hourglass.svg',
            'interactive-tree' => 'interactive-tree.svg',
            'lifespans'        => 'lifespans.svg',
            'pedigree'         => 'pedigree.svg',
            'map'              => 'map.svg',
            'relationships'    => 'relationships.svg',
            'statistics'       => 'statistics.svg',
            'timeline'         => 'timeline.svg',
            'fact-birth'       => 'fact-birth.svg',
            'fact-occupation'  => 'fact-occupation.svg',
            'fact-death'       => 'fact-death.svg',
            'fact-address'     => 'fact-address.svg',
            'fact-email'       => 'fact-email.svg',
            'fact-marriage'    => 'fact-marriage.svg',
            'fact-residence'   => 'fact-residence.svg',
            'fact-education'   => 'fact-education.svg',
            'fact-immigration' => 'fact-immigration.svg',
            'fact-military'    => 'fact-military.svg',
            'fact-burial'      => 'fact-burial.svg',
            'fact-census'      => 'fact-census.svg',
            'fact-faith'       => 'fact-faith.svg',
            'fact-property'    => 'fact-property.svg',
            'fact-will'        => 'fact-will.svg',
            'fact-retirement'  => 'fact-retirement.svg',
            'fact-divorce'     => 'fact-divorce.svg',
            'fact-citizenship' => 'fact-citizenship.svg',
            'fact-adoption'    => 'fact-adoption.svg',
            'fact-baptism'     => 'fact-baptism.svg',
            'fact-phone'       => 'fact-phone.svg',
            'fact-generic'     => 'fact-generic.svg',
            'fact-photo'       => 'fact-photo.svg',
            'fact-sport'       => 'fact-sport.svg',
            'fact-letter'      => 'fact-letter.svg',
            'action-edit'      => 'action-edit.svg',
            'action-copy'      => 'action-copy.svg',
            'action-delete'    => 'action-delete.svg',
        ];
    }
}
