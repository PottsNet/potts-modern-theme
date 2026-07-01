# Potts Modern Theme for webtrees

Potts Modern is a standalone, responsive heritage theme for webtrees 2.2.x. It combines a dark teal navigation header, parchment-inspired cards, modern SVG icons and configurable accessibility and layout options.

This is a **beta release** intended for testing on non-production or well-backed-up webtrees sites.

## Version 1.1.0-beta.62

This compatibility polish release improves wide shared-note/table handling and gives unknown module-like third-party top-level menu items a generic module icon instead of leaving them unstyled.

## Translations

The translation template is `resources/lang/messages.pot`. Current translation files are provided for Dutch (`nl`), German (`de`), French (`fr`), Spanish (`es`), Polish (`pl`) and Portuguese (`pt`). These files are starter translations for community review. Native-speaker corrections are welcome.

Contributors can edit the `.po` files with Poedit or a text editor, translating each `msgstr` while leaving its English `msgid` unchanged. Submit the completed PO file in a pull request or attach it to a GitHub issue. Release builds compile accepted PO files to the MO files loaded by webtrees.

## Features

- Responsive desktop, tablet and mobile layouts
- Modern icon-based primary and dropdown navigation
- Restyled individual, family, chart, report and administration pages
- Enhanced fact and event cards with matching SVG icons
- Original themed male and female placeholder portraits
- Configurable colour palette, spacing, page width, corners and shadows
- Contributor-ready gettext translation files
- Optional larger controls, high contrast and reduced motion settings
- Graceful styling for optional third-party history, story and book modules
- No webtrees core-file modifications

## Compatibility

- Developed for webtrees 2.2.x
- PHP requirements are the same as the installed webtrees release
- Designed for current versions of Chrome, Edge, Firefox and Safari

Because third-party modules can register their own menus and markup, test the theme with your site’s module combination before using it in production.

## Installation

1. Download the release ZIP.
2. Extract it so the folder is named exactly:

   ```text
   modules_v4/potts_modern_theme/
   ```

3. In webtrees, open **Control panel → Modules → All modules**.
4. Enable **Potts Modern**.
5. Select **Potts Modern** from the Theme menu or your tree preferences.
6. Open the module settings to choose the preferred palette and layout options.
7. Clear the webtrees cache and hard-refresh the browser if an older version was previously installed.

The module is disabled by default after installation so an administrator can review it before activation.

## Upgrade

Replace the existing `potts_modern_theme` folder with the new release. The folder name remains unchanged, so saved theme preferences should be retained.

Keep a copy of the previous release until the updated theme has been tested with anonymous visitors, members, editors and administrators.

## Rollback

Select another installed theme from the Theme menu. If the web interface is unavailable, rename the module folder to:

```text
potts_modern_theme.disable
```

## Settings

The administration page provides options for:

- colour palette
- text size
- corner style
- shadows
- page and sidebar width
- content spacing
- navigation icon size and label display
- photo strip, submenu icons and event icons
- large controls
- high contrast
- reduced motion

## Optional integrations

Potts Modern includes non-essential styling for some third-party modules, including history-region selectors, stories and family-book interfaces. These integrations are optional. The theme should continue to operate when those modules are not installed.

The Potts Historical Facts global region selector is styled so it remains with the utility/language controls, including when webtrees is displayed in translated languages.

## Known beta considerations

- The theme overrides the shared webtrees menu-item view to provide modern menu icons. Test custom modules that add unusual menu structures.
- Third-party modules may require small CSS adjustments if they use custom markup.
- The bundled `foundation.min.css` is derived from the neutral webtrees 2.2.x theme foundation and is distributed under the same GPL licence.

## Reporting problems

When reporting a problem, include:

- webtrees version
- PHP version
- browser and device
- whether the visitor was logged in
- relevant third-party modules
- a screenshot and browser-console error, where available

Report problems through the repository's [GitHub Issues](https://github.com/PottsNet/potts-modern-theme/issues) page.

## Licence

Copyright © 2026 Jason Potts.

Potts Modern is free software licensed under the GNU General Public License, version 3 or later. See [LICENSE](LICENSE).
