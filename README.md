# Potts Modern Theme for webtrees

Potts Modern is a responsive, highly configurable heritage theme for webtrees 2.2.x. It presents family history with clearer navigation, story-focused individual pages, refined cards and tables and practical desktop, tablet and phone layouts.

**Current test version: 1.4.0-alpha.10**

Version 1.4.0-alpha.10 improves the Biography block on phones so the portrait, person name and biography details form a clear one-column sequence, including a fix that keeps generated fallback portraits in normal mobile document flow. It also adds the missing individual-navigation strings to the translation template while retaining the alpha.9 compatibility fixes.

## Features

- responsive desktop, tablet and phone layouts
- modern primary and dropdown navigation
- Storytelling, Classic and Compact homepage experiences
- optional welcome panel, quick search and full-width hero placement
- biography-style individual identity area and life-event presentation
- themed male, female and unknown profile and chart placeholders
- seven coordinated colour presets
- Light, Standard and Bold typography settings
- Compact, Comfortable and Spacious content density
- Standard, Wide and Full Width page layouts
- optional larger controls, higher contrast and reduced animation
- gettext translation files for Dutch, German, French, Spanish, Polish and Portuguese
- no webtrees core-file modifications

## Highlights in 1.3.0

- added the first stable foundation for semantic life-event presentation on individual pages
- added configurable typography weight presets, including a lighter option
- improved dropdown sizing for long and translated menu labels
- strengthened masthead and table-heading contrast
- stabilised logged-in homepage columns in translated languages
- contained Favourite blocks within their selected homepage column
- corrected the **Add a favourite** AJAX dialog so it appears above its backdrop and remains interactive
- replaced legacy webtrees silhouettes in Potts Narrative Ancestor Book output with Potts Modern male, female or neutral artwork
- expanded the translation template and included updated Dutch translations
- refreshed the README with links to the wider Potts webtrees toolkit

## Compatibility

- developed for webtrees 2.2.x
- PHP requirements are the same as the installed webtrees release
- designed for current Chrome, Edge, Firefox and Safari releases

Third-party modules can supply their own markup and styles. Test your installed module combination after upgrading and keep the previous theme folder available until checks are complete.

## Installation

1. Download the release ZIP.
2. Remove or rename the existing `modules_v4/potts_modern_theme` folder.
3. Extract the ZIP so the installed path is exactly:

   ```text
   modules_v4/potts_modern_theme/
   ```

4. Open **Control panel → Modules → All modules** and enable **Potts Modern**.
5. Select **Potts Modern** from the Theme menu or tree preferences.
6. Review the module settings.
7. Clear the webtrees cache and hard-refresh the browser.

The module is disabled by default after a fresh installation so an administrator can review it before activation.

## Upgrade and rollback

Replace the existing `potts_modern_theme` folder with the new one. Saved preferences should remain because the folder and preference keys are unchanged.

Keep the previous version until testing is complete. To roll back, restore the previous folder or select another theme. If the web interface is unavailable, rename the folder to `potts_modern_theme.disable`.

## Translations

The master template is `resources/lang/messages.pot`. Starter catalogues are included for:

- Dutch (`nl`)
- German (`de`)
- French (`fr`)
- Spanish (`es`)
- Polish (`pl`)
- Portuguese (`pt`)

Translate the `msgstr` values in the relevant `.po` file while leaving each English `msgid` unchanged. Compile the updated PO file to MO format before testing it in webtrees. Native-speaker corrections are welcome through a pull request or GitHub issue.

## Optional integrations

Potts Modern includes restrained compatibility styling for Potts modules such as Hero Slideshow, Historical Facts, Biography, Family Books and Narrative Ancestor Book. These integrations are optional and the theme should continue to work when the companion modules are not installed.

Potts Hero Slideshow remains an independent module. The theme can move its homepage block above the normal columns and provide theme variables, while the slideshow module controls images, captions, transitions, dots and timing.

## Other Potts modules

Potts Modern is part of a wider webtrees toolkit. These are the 12 other Potts modules and closely related projects:

1. **[Potts Biography / Life Story Engine](https://github.com/PottsNet/potts_life_story_engine)** — creates a responsive, story-focused biography from recorded facts, relationships and media.
2. **[Potts Hero Slideshow](https://github.com/PottsNet/potts-hero-slideshow)** — provides a theme-aware full-width homepage photograph slideshow.
3. **[Potts Family Books](https://github.com/PottsNet/potts-family-books)** — creates and publishes family-history books, chapters, images and genealogy links.
4. **[Potts SEO Helper](https://github.com/PottsNet/potts-seo-helper)** — provides genealogy-focused metadata, sitemap and robots.txt support and public landing-page assistance.
5. **[Potts On This Day Email](https://github.com/PottsNet/potts_on_this_day_email)** — sends scheduled family-history anniversaries and personalised email content.
6. **[Potts Relationship Context](https://github.com/PottsNet/potts_relationship_context)** — explains how an individual is related to a selected reference person.
7. **[Potts Narrative Ancestor Book](https://github.com/PottsNet/potts_narrative_ancestor_book)** — produces readable narrative ancestor books from GEDCOM records.
8. **[Potts Admin Shortcuts](https://github.com/PottsNet/potts_admin_shortcuts)** — adds convenient webtrees administration links to My Page.
9. **[Potts Fact Ages](https://github.com/PottsNet/potts_fact_ages)** — displays age-at-event labels beside personal and historical facts.
10. **[Potts Historical Facts](https://github.com/PottsNet/potts-historical-facts)** — places sourced regional historical events alongside a person's life facts.
11. **[Potts Favicon](https://github.com/PottsNet/potts_favicon)** — supplies configurable site and browser icons for webtrees installations.
12. **[Custom Module Manager – PottsNet fork](https://github.com/PottsNet/CustomModuleManager)** — installs and updates compatible webtrees custom modules.

The complete collection is available from the **[PottsNet GitHub profile](https://github.com/PottsNet?tab=repositories)**. A link may temporarily lead to the profile or a not-yet-public repository while a module is being prepared for its first public release.

## Known considerations

- The theme overrides the shared webtrees menu-item view to supply modern menu icons. Test custom modules that add unusual menu structures.
- Some third-party modules may need small CSS adjustments when they use fixed widths or custom page wrappers.
- The bundled `foundation.min.css` is derived from the neutral webtrees 2.2.x theme foundation and is distributed under the same GPL licence.

## Reporting problems

Include the following when opening an issue:

- Potts Modern and webtrees versions
- PHP version
- browser and device
- selected language
- whether the visitor was logged in
- relevant third-party modules
- screenshot and browser-console error where available

Report problems through [GitHub Issues](https://github.com/PottsNet/potts-modern-theme/issues).

## Licence

Copyright © 2026 Jason Potts.

Potts Modern is free software licensed under the GNU General Public License, version 3 or later. See [LICENSE](LICENSE).
