## [1.4.0-alpha.8] - 2026-08-24

- Integrated community German translation updates from PR #20.
- Integrated community French translation updates from PR #25.
- Rebuilt `de.mo` and `fr.mo`.

# Changelog

## [1.4.0-alpha.7] - 2026-08-24

### Fixed
- Fixed webtrees silhouettes being mirrored in third-party chart modules such as Extended Family.
- Replacement silhouette images no longer inherit the `wt-icon-flip-rtl` utility class from the original webtrees icon element.
- Kept silhouette replacement generic rather than special-casing individual modules.

## [1.4.0-alpha.6] - 2026-08-24

- Added explicit compatibility for Repository Hierarchy source-citation action controls (GitHub issue #22).
- Protects Repository Hierarchy copy/paste/delete/sort citation links from Potts Modern's legacy fact-artwork cleanup even when third-party markup does not use native webtrees action classes.
- Keeps the Paste copied source citation action available when Facts and Events rows are rebuilt after the Relationship filter is toggled.
- Retains the 1.4.0-alpha.4 fact action-control restoration and 1.4.0-alpha.3 overflow fixes.

## [1.4.0-alpha.4] - 2026-08-24

- Fixed GitHub issue #21 where fact edit/copy/delete controls could disappear after switching tabs on an individual page.
- Fact action detection now recognises webtrees action containers, common icon variants, routes and data attributes rather than depending on English labels alone.
- Added a safe restoration pass so controls accidentally marked as legacy artwork are made visible again after AJAX/tab refreshes.

## [1.4.0-alpha.3] - 2026-08-24

- Fixed GitHub issue #24 by allowing editing cards/sections, AJAX dialogs and interactive fact rows to show menus and enhanced selector results outside their immediate container.
- Made long Select2/Choices/Tom Select result lists vertically scrollable rather than clipping the lower results.
- Kept the normal rounded-card overflow treatment elsewhere in the theme.

## [1.4.0-alpha.2] - 2026-08-12

### Fixed

- Hidden source citations no longer leave an empty cream/gold card on individual fact and event displays when webtrees privacy rules suppress the source for the current visitor.
- Added a JavaScript fallback for dynamically loaded/AJAX fact content and browsers that do not apply the CSS `:has()` empty-source rule.
- Preserved normal source visibility, links, expansion controls and citation styling whenever webtrees supplies visible source content.

## [1.4.0-alpha.1] - 2026-07-24

### Added

- Added a clearly labelled **Explore this person** navigation panel above individual-page tabs.
- Added a short explanation to help visitors understand that the tabs are the main way to explore a person’s story, family, records, photographs and research.
- Added a two-column mobile tab layout with a single-column fallback on very narrow screens.

### Improved

- Strengthened the selected tab with a solid high-contrast state.
- Improved inactive-tab borders, hover feedback, keyboard focus and minimum touch size.
- Preserved the native webtrees tab structure for AJAX loading, URL fragments and Potts Member Help contextual links.

## [1.3.0] - 2026-07-19

### Added

- Added the first stable foundation for semantic life-event presentation on individual pages, including event classification, visual tiers and a connected timeline treatment.
- Added Light, Standard and Bold typography-weight presets.

### Fixed

- Improved desktop dropdown sizing for long and translated menu entries.
- Strengthened masthead and heading contrast for improved readability.
- Stabilised logged-in homepage main and sidebar columns in translated languages.
- Contained Favourite/Favorite blocks within their selected homepage column.
- Fixed the **Add a favourite** AJAX dialog appearing underneath its Bootstrap backdrop.
- Replaced legacy webtrees silhouette placeholders in Potts Narrative Ancestor Book output with Potts Modern male, female or neutral artwork.

### Improved

- Expanded the translation template and language catalogues for colour presets, homepage controls and newer biography text.
- Incorporated updated Dutch typography and palette translations.
- Kept silhouette replacement narrowly scoped so photographs and unrelated modules retain control of their own media.

### Documentation

- Updated the README for the stable release and added information and links for 12 other Potts modules and related projects.
- Added stable 1.3.0 release notes and upgrade guidance.


## [1.3.0-alpha.4] - 2026-07-19

- Fixed the Favourite individuals **Add a favourite** AJAX dialog appearing underneath its Bootstrap backdrop. AJAX modals trapped inside homepage/block stacking contexts are now promoted to the document body and assigned a reliable modal/backdrop stacking order.
- Added a narrowly scoped MutationObserver for dynamically inserted webtrees modal layers without restoring the earlier page-wide observer.

## [1.3.0-alpha.3] - 2026-07-19

### Fixed

- Replaced legacy webtrees silhouette placeholders inside Potts Narrative Ancestor Book pages with the Potts Modern male, female or neutral artwork.
- Expanded silhouette gender detection to read image titles, data attributes and nearby record context.
- Kept silhouette replacement narrowly scoped to individual profiles, recognised charts and the Potts Narrative Ancestor Book so other modules retain control of their own media.

### Verified

- The translated German homepage retains the intended responsive two-column layout.
- Theme settings remain available under translated interfaces; testing should focus on readable labels, working controls and saving changed values rather than every label being translated already.

### Clarified

- Potts Modern restores normal interaction styling for favourites controls that webtrees considers enabled, while leaving genuine disabled states intact. A greyed-out entry in Change blocks selects the block itself; records are added through the control inside the installed favourites block.

## [1.3.0-alpha.2] - 2026-07-18

### Fixed
- Added an explicit responsive homepage grid so the main and sidebar columns remain stable for logged-in users in translated languages.
- Contained Favourite/Favorite blocks within their assigned homepage column and neutralised inherited widths and floats.
- Limited custom silhouette replacement to recognised webtrees profile and chart contexts, preserving silhouettes supplied by Potts Narrative Ancestor Book and other modules.
- Expanded the translation template and PO catalogues to include colour presets, homepage experience controls and newer theme text.
- Incorporated the currently proposed Dutch typography and palette translations.

### Documentation
- Rebuilt the README for the current test version and added information and links for 12 other Potts modules and related repositories.

### Testing note
- This is a test build based on 1.3.0-alpha.1. The four GitHub issue scenarios should be verified in a live webtrees 2.2.6 installation before a public release.

## [1.3.0-alpha.1] - 2026-07-11

### Added
- First foundation for the Potts Modern life-story event system.
- Semantic event classification and major, standard and minor event tiers.
- A connected timeline rail on individual Facts and events pages.
- Distinct icons and restrained colours for major genealogy event types.
- Quieter editing controls that remain fully accessible on hover and keyboard focus.

### Notes
- This alpha deliberately keeps webtrees native fact rendering and editing behaviour. Event grouping and specialised career/residence cards will follow after this visual foundation is tested.

# 1.2.0

## Added
- Added a biography-style individual profile header with key life and family details.
- Refined existing homepage blocks with semantic styling, restrained event accents, subtle motion and improved mobile behaviour.

### Homepage experience refinements

- Added responsive shortcut cards for desktop, tablet and mobile.
- Corrected saving of custom welcome heading and introduction text.
- Improved the homepage template to keep all optional features independently configurable.

- Seven selectable colour presets: Potts Green, Ocean Blue, Burgundy, Heritage Purple, Slate, Teal and Sandstone.
- Typography weight presets: Light, Standard and Bold.
- Standard, Wide and Full Width page layouts.
- Compact, Comfortable and Spacious content density options.
- Live preview for colour, typography, spacing, corners, shadows and page width.

## Improved

- Settings page organisation and accessibility controls.
- Desktop dropdown sizing for long and translated menu labels.
- Form, report and advanced-search field widths on webtrees 2.2.6.
- Calendar-specific sizing is now isolated from ordinary forms.
- Card, table, button, navigation and form consistency.
- Hero Slideshow compatibility.
- Storytelling, Classic and Compact homepage presentation modes.
- Optional welcome panel with configurable heading and introduction.
- Prominent homepage quick search.
- Automatic Potts Hero Slideshow placement above the homepage content.
- Quick homepage style presets and a single Potts Modern Experience switch.

# 1.1.1-beta.36

- Adds a new Typography weight setting with Light, Standard and Bold presets for headings, navigation, labels and emphasised text.
- Makes desktop dropdown menus expand to fit longer and translated labels while retaining safe viewport limits.
- Keeps mobile dropdowns full-width and allows long labels to wrap.
- Includes the beta.35 form-width and calendar-selector corrections.

# 1.1.1-beta.35

- Corrected the remaining narrow text fields on Advanced Search and report setup pages.
- Scoped all calendar-specific `.wt-page-options` styling to `table.wt-page-options` so it can no longer affect webtrees form-based page options.
- Preserved the native webtrees 2.2.6 Bootstrap widths for ordinary text, date and report fields.

# 1.1.1-beta.34

- Corrects search, report and chart form layouts against the actual webtrees 2.2.6 Bootstrap markup.
- Restores the native 3/6/3 advanced-search grid and 3/9 report grid.
- Prevents calendar-only 6rem label and 4.8rem input widths from leaking into every `.wt-page-options` form.
- Keeps compact calendar controls scoped to `table.wt-page-options`.

# 1.1.1-beta.33

- Updated Potts Hero Slideshow integration for the standalone v1.0.0 slideshow module.
- Keeps full-width homepage placement, block chrome removal and Potts Modern colour-variable support.
- Removes duplicated theme-side slideshow JavaScript so slide timing, dots, captions and transitions are controlled by the slideshow module.
- Removes old heavy theme-side `.ourfamily-hero` component styling so the slideshow module owns its own appearance and settings.
- Retains the 1.1.1-beta.32 search/report form refinements.

# 1.1.1-beta.32
- Refined legacy search/report form styling after live testing.
- Keeps General Search query field wide while preserving compact checkbox/radio controls.
- Widens legacy report label cells and non-date text/autocomplete fields on Births, Marriages and Lifespans-style report pages.
- Avoids changing the chart pages that were already displaying correctly.

# 1.1.1-beta.31

- Refines legacy webtrees report/search form styling after live testing.
- Classifies Births/Lifespans and similar report option forms even when webtrees does not expose a report body class.
- Widens report label/title cells and key text/autocomplete fields while preserving the working chart form layout.
- Restores a wider main input on General search without disturbing checkbox/radio options.

# 1.1.1-beta.30

- Rebuilt search/report form styling from the stable hero build after inspecting webtrees form patterns.
- Added JavaScript form classification for General search, Advanced search, Branches and chart/report option pages.
- Added targeted CSS for autocomplete fields, label columns and compact checkbox/radio controls without broad global form overrides.

# 1.1.1-beta.15

- Ensures the Potts Hero Slideshow overlay caption offset setting applies reliably on the homepage.

# 1.1.1-beta.14

- Adds theme-side support for the Potts Hero Slideshow overlay caption position control.

## 1.1.1-beta.12

- Refines Potts Hero Slideshow overlay captions on the homepage.
- Keeps overlay title strips aligned to the bottom of the image, with auto height and centred text.

## 1.1.1-beta.12

- Added theme support for Potts Hero Slideshow transition-speed CSS variables.


## 1.1.1-beta.12

- Refines Potts Hero Slideshow caption/title display for exact-frame photos.
- Supports the module caption display classes for below-image, overlay and hidden titles.

## 1.1.1-beta.8
- Corrected Potts Hero Slideshow exact frame support on homepage.
- Preserved offset frame as the separate Offset photo mount style.

# Changelog

## 1.1.1-beta.7

- Updated homepage hero styling to follow Potts Modern palette colours.
- Added theme-side support for the new Potts Hero Slideshow transition effects, including random transitions.
- Kept full-width homepage hero placement compatible with the module block.

## 1.1.1-beta.5

- Added homepage CSS support for Potts Hero Slideshow module settings including selector dots off, simple/no frame styles and colour/sepia/mono image treatment.
- Added a small JavaScript safeguard to remove existing selector dots when a hero is configured with `data-dots="0"`.

## 1.1.1-beta.4

- Adjusts the homepage hero image frame to favour best-fit display so full family photographs remain visible.
- Slightly increases the hero photo area and adds optional `ourfamily-hero-fit-cover` / `ourfamily-hero-fit-contain` helper classes.

## 1.1.1-beta.3
- Added an optional full-width homepage hero banner feature.
- Allows an ordinary HTML block containing `.ourfamily-hero` to be moved above the normal two-column homepage layout.
- Added responsive vintage-frame slideshow styling, fade transitions, optional slide dots and hero action buttons.

## 1.1.0
- Promoted the tested 1.1.0-beta.62 theme to a regular stable release.
- Changed the internal version from `1.1.0-beta.62` to `1.1.0`.
- Added `latest-version.txt` and `customModuleLatestVersionUrl()` so webtrees and Custom Module Manager can detect future updates.
- Kept the wide-table handling, FAQ translation support, third-party menu icon fallback and bundled starter translations from the beta series.

## 1.1.0-beta.62
- Added a generic module icon fallback for unknown module-like third-party top-level menu items.
- Wrapped wide narrative/shared-note/source tables in a horizontal scroll container so census transcripts and similar records do not break the page layout.
- Updated the README release note so it reflects the current compatibility changes.

## 1.1.0-beta.61
- Fixed the FAQ top-menu icon for translated menu labels by adding language-aware FAQ matching.
- Added URL and class-name fallback detection for FAQ/FAQs menu links, so the icon still appears when the visible label is translated.
- Added the FAQ icon to the legacy JavaScript menu enhancement fallback.

## 1.1.0-beta.60

- Added a dedicated FAQ navigation icon and mapped top-level FAQ/FAQs menu labels to it.
- Added FAQ submenu icon support for third-party menu items that use FAQ-style labels.

## 1.1.0-beta.59

- Added starter German, French and Spanish translations for Potts Modern theme labels and settings text.
- Kept the existing Dutch translation and rebuilt the compiled translation catalogues.
- Updated the translation documentation to invite native-speaker corrections.

## 1.1.0-beta.57

- Added styling support for the updated Potts Historical Facts global selector.
- Kept the History region selector aligned with utility/language controls when webtrees is displayed in translated languages.
- Added mobile-navigation recognition for translated account controls and the History selector.

## 1.1.0-beta.56

- Added the Dutch translation contributed by TheDutchJewel.
- Included the compiled Dutch translation catalogue used by webtrees.
- Retained the administrator shortcuts, administration header contrast and Messages block fixes.

## 1.1.0-beta.55

- Restored teal text to message subjects and their nested bold text and icons.
- Replaced the Messages block's fixed table layout with automatic column sizing.
- Kept the checkbox column compact and allowed the subject column to use remaining space.
- Kept sent dates on one line and gave email addresses enough room to wrap naturally.

## 1.1.0-beta.54

- Loaded the administration header contrast fix through webtrees' shared style stack.
- Ensured the fix is available on the Control panel and every module settings page.
- Kept the rule restricted to the administration layout's `.wt-control-panel` body.

## 1.1.0-beta.53

- Restricted the white utility-link treatment to webtrees administration layouts.
- Restored the intended dark teal labels in the public genealogy navigation.
- Kept My page, Language and Sign out clear against administration headers.

## 1.1.0-beta.52

- Improved utility-link contrast across administration page headers.

## 1.1.0-beta.51

- Made the mobile Show more events control update immediately without delayed animation frames.
- Counted only events enabled by the associated, close-relative and historic event filters when building each batch.
- Removed stale batch hiding from events controlled by their own filters.
- Reconnected the control to the current Facts and events table after AJAX or tab updates.
- Strengthened touch and stacking behaviour for the mobile event control.

## 1.1.0-beta.50

- Replaced the two embedded 640-pixel portrait PNGs with visually equivalent high-quality WebP files.
- Reduced the combined portrait source size from approximately 916 KB to less than 40 KB.
- Reduced repeated HTML transfer and parsing work while preserving the request-safe embedded silhouette loader.
- Updated release documentation and removed a duplicated changelog section.

## 1.1.0-beta.49

- Replaced the mobile all-at-once event reveal with progressive batches of 12 events.
- Reduced large Safari layout and image-decoding work when showing more events.
- Added a Show fewer events reset after the final batch is displayed.

## 1.1.0-beta.48

- Added muted semantic colours for associated, close-relative and historic event title tiles.
- Used webtrees event-group classes and Historical Facts markers to classify optional events.
- Retained warm parchment and gold for the individual's personal events.

## 1.1.0-beta.47

- Applied rounded fact tiles through dedicated structural classes instead of markup-dependent selectors.
- Kept the same rounded shape across short records, long records and responsive browser widths.
- Excluded event filters and nested supporting tables from the outer tile treatment.

## 1.1.0-beta.46

- Kept rounded Facts and events tiles on records containing 60 or more table rows.
- Applied the lightweight responsive tile marker even when expensive fact reconstruction is skipped.
- Preserved the faster loading path for long individual timelines.

## 1.1.0-beta.45

- Fixed historical facts so they stay hidden unless the Historic events checkbox is selected.
- Restored rounded desktop fact cards across long individual pages and markup variations.
- Hid leaked inline script text that could appear in empty story panels.
- Reduced default webtrees silhouette flicker before the Potts Modern silhouette replacement is applied.
- Kept relationship panels padded and readable on mobile and desktop.

## 1.1.0-beta.44

- Applied rounded corners directly to enhanced desktop fact summary and detail cells.
- Cleared row backgrounds and clipped cell surfaces so rounded corners remain visible.

## 1.1.0-beta.43

- Restored the connected rounded fact tiles on desktop.
- Returned event icons and titles to the left side of the summary rail.
- Kept the existing stacked mobile fact-card layout unchanged.

## 1.1.0-beta.42

- Restored the native hidden state for unchecked associated, relative and historical event groups.
- Added comfortable internal spacing to the page-level relationship result.
- Reduced relationship-result font weight while retaining clear headings and links.

## 1.1.0-beta.41

- Added a dedicated lightweight enhancement path for individual pages.
- Replaced whole-page relationship searches with a short title-area ancestor walk.
- Replaced repeated all-element silhouette searches with a targeted class selector.
- Cached individual gender detection instead of rereading the complete page for each image.
- Skipped synchronous fact reconstruction for timelines containing 60 or more table rows.

## 1.1.0-beta.40

- Placed failed and successful relationship cards below the individual title on phones.
- Added runtime loading for module-specific language files.
- Added `resources/lang/messages.pot` and an editable Dutch `resources/lang/nl.po`.
- Made the theme settings page and preview text translatable.

## 1.1.0-beta.39

- Watched briefly for a Family navigator that webtrees inserts after the initial page render.
- Added targeted placement retries for slower mobile pages.
- Recognised the navigator by its heading when the expected webtrees class is unavailable.
- Restricted relationship-card processing to the Family navigator instead of scanning the entire individual page.
- Reduced repeated full enhancement passes after tab and accordion interactions.

## 1.1.0-beta.38

- Placed the complete Family navigator sidebar after the portrait, identity fields and tab content on phones.
- Identified the native main and sidebar branches by their contents instead of relying on Bootstrap column names.
- Restored the sidebar to its original desktop position when the viewport widens.

## 1.1.0-beta.37

- Anchored relationship-panel layout to webtrees' `.wt-page-title`.
- Stopped the relationship enhancer from marking the full portrait, tabs and sidebar wrapper as one row.
- Cleared stale oversized relationship-row markers before rebuilding the panel layout.
- Restored portrait and tabs before the Family navigator for signed-in and signed-out visitors.

## 1.1.0-beta.36

- Stopped applying the owner identity class to a broad ancestor containing the full individual page.
- Restored the mobile sequence of portrait and names, tabs and facts, then the Family navigator sidebar.
- Explicitly kept script, style and template elements non-rendering.
- Prevented webtrees modal JavaScript from appearing as page text.

## 1.1.0-beta.35

- Used webtrees' native `.col-sm-8` and `.col-sm-4` individual-page columns for reliable mobile ordering.
- Removed stale "This is you" relationship panels from reports and other non-individual pages.
- Removed leaked modal JavaScript text from an empty Stories tab.
- Added Eucalyptus green and linen and Claret and archival ivory colour palettes.
- Added both new palettes to the live settings preview.

## 1.1.0-beta.34

- Moved the complete Extra information, Family navigator and Descendants sidebar after the portrait and tab content on phones.
- Added a hidden placeholder so the sidebar returns to its original desktop position when the viewport widens.
- Replaced the ineffective nested-branch-only ordering with reversible mobile DOM placement.

## 1.1.0-beta.33

- Kept the desktop Family navigator sidebar unchanged.
- Ordered the primary individual tabs and content before the Family navigator on phones.
- Marked the central and sidebar branches from their nearest shared layout container.

## 1.1.0-beta.32

- Added direct support for webtrees' native `.wt-tab-relatives` Families markup.
- Stacked spouse, marriage and child rows and expanded person boxes on phones.
- Located the signed-in owner's complete identity wrapper without relying on a Bootstrap row class.

## 1.1.0-beta.31

- Recognised the special "This is you" relationship panel used on the signed-in owner's record.
- Separated Edit controls from the mobile individual title and relationship card.
- Added a structural mobile fallback for identity rows containing `#individual-names`.

## 1.1.0-beta.30

- Replaced the bright blue selected-book chapter with a dark teal active state and white text.
- Expanded settings-page header coverage to webtrees' additional header and Bootstrap navbar wrappers.
- Restored dark text inside settings-page dropdown panels while retaining white top-level utility links.

## 1.1.0-beta.29

- Built the mobile Account and settings menu from the separate live webtrees utility controls.
- Moved Account and settings above Explore so account actions are immediately reachable.
- Added support for link- and button-based Sign out controls.
- Improved desktop settings-page utility-link contrast, spacing and alignment.

## 1.1.0-beta.28

- Restored mobile filtering for unchecked historic, associated and close-relative event categories.
- Added a clearly styled Sign out action for authenticated mobile users.
- Reused webtrees' existing Sign out URL and avoided duplicate mobile authentication links.
- Preserved the stable event limiter and existing desktop behaviour.

## 1.1.0-beta.27

- Added a prominent Sign in action near the top of the mobile menu for signed-out visitors.
- Reused webtrees' existing authentication URL instead of hard-coding a login route.
- Stacked outer Families-tab tables and expanded person boxes to the available phone width.
- Stacked Sources and Notes table headings above their details on phones.
- Preserved the beta.25 event limiter and beta.26 visual refinements.

## 1.1.0-beta.26

- Reworked mobile individual-page tabs into a compact two-column grid with a clear active state.
- Removed broken decorative artwork from mobile event headings and tightened long event content.
- Stacked Family navigator relationships above full-width person details on phones.
- Preserved the beta.25 mobile event limiter and desktop layouts.

## 1.1.0-beta.25

- Limited the initial mobile Facts and events view to 12 events to reduce AJAX insertion and layout work.
- Added Show all events and Show fewer events controls without deleting any information.
- Disabled JavaScript fact-card rebuilding on phones and used lightweight native-row styling instead.
- Kept desktop facts and event processing unchanged.

## 1.1.0-beta.24

- Restored the exact beta.19 implementation, which was confirmed to scroll reliably on mobile Safari.
- Removed the tab, fact-card, lazy-loading, rendering-containment and mobile performance experiments from beta.20 through beta.23.
- Retained the working hamburger navigation and full-width mobile relationship panel.

## 1.1.0-beta.19

- Restored the confirmed scrollable beta.16 codebase after the mobile tab experiment caused Safari to stop scrolling.
- Retained the compact hamburger navigation and full-width mobile relationship panel.
- Deferred further tab-layout changes until they can be introduced without altering page overflow or touch behaviour.

## 1.1.0-beta.16

- Detected the shared Bootstrap row containing the individual name and relationship panel.
- Forced the complete relationship branch below the name at phone widths.
- Removed inherited desktop column widths and heights from the mobile relationship panel.

## 1.1.0-beta.15

- Reflowed the individual-page relationship panel below the person heading on phones.
- Prevented Bootstrap desktop columns from squeezing relationship text into single-letter lines.
- Rebuilt mobile Facts and events rows as full-width cards with compact horizontal event headings.
- Applied the responsive facts layout through reliable theme classes instead of one webtrees tab wrapper.

## 1.1.0-beta.14

- Replaced the oversized phone navigation with a compact hamburger button and slide-in menu.
- Moved search, genealogy links and account/settings controls into a touch-friendly mobile drawer.
- Added expandable row-style submenus, keyboard focus handling, Escape-to-close and translated accessibility labels.
- Preserved the existing desktop and tablet navigation layout.

## 1.1.0-beta.13

- Fixed the configuration page failing with `Namespace "potts-modern" not found` when another theme is active.
- Ensured the Potts Modern settings view is registered before the administration page is rendered.

## 1.1.0-beta.12

- Fixed Historical Facts headings exposing the internal age marker.
- Made historical event title and age formatting independent of module script order.
- Kept one event heading and one age line in each historical fact card.

## 1.1.0-beta.11

- Added clear vertical space beneath the header search control.
- Aligned the Historical Facts region control with the other header menu items.
- Removed exact duplicate fact headings left behind when custom historical events are restyled.

## 1.1.0-beta.10

- Added dedicated compact chart silhouettes for male, female and unknown placeholders.
- Kept the decorative framed portrait placeholders on the main individual page.
- Replaced chart and tree silhouette placeholders with smaller transparent SVG artwork designed for ancestor and compact tree boxes.

## 1.1.0-beta.9

- Fixed the custom silhouette replacement affecting ancestor and tree/chart person boxes.
- Restricted portrait replacement to the main individual-page placeholder so compact tree and ancestor charts keep their layout.
- Removed the broad CSS silhouette content override that could enlarge chart nodes.

## 1.1.0-beta.8

- Added case-insensitive CSS selectors for webtrees silhouette classes.
- Made JavaScript replacement scan all silhouette class variants rather than exact lowercase `i.icon-silhouette-m/f` elements.
- Added delayed retry passes for silhouette replacement after AJAX or late DOM rendering.


## 1.1.0-beta.7

- Replaced webtrees silhouette `<i>` elements directly with the new portrait `<img>` elements at runtime.
- This avoids browser differences in overriding CSS `content: url(...)` on replaced elements.
- Kept the CSS fallback for chart and legacy views.

- Corrected the silhouette CSS selectors to match the actual webtrees classes (`icon-silhouette-m` and `icon-silhouette-f`).
- The previous selectors incorrectly required each element to also have a generic `icon-silhouette` class, so the replacement artwork was never applied.

## 1.1.0-beta.5 - 2026-06-19

- Replaced the actual webtrees CSS silhouette icons (`icon-silhouette-m` and `icon-silhouette-f`) with the Potts Modern portrait artwork.
- Removed reliance on finding `<img>` elements, because webtrees renders missing portraits as CSS content on `<i>` elements.

## 1.1.0-beta.4 - 2026-06-19

- Fixed a fatal startup error caused by generating module asset URLs during `boot()` before the PSR-7 request was available.
- Embedded the male and female placeholder portraits as data URLs in the theme configuration.
- Corrected the JavaScript configuration so the placeholder image map is actually exposed to the browser.


## 1.1.0-beta.3 - 2026-06-18

- Added original Potts Modern male and female placeholder portraits.
- Replaced webtrees default individual silhouettes while preserving real media photographs.
- Added the GitHub Issues support address.

All notable changes to Potts Modern are documented here.

## [1.1.0-beta.2] - 2026-06-18

### Added

- Modern styling for the interactive-tree canvas, controls and person cards.
- Interactive-tree styling now works inside individual-page tabs as well as on dedicated chart pages.

### Changed

- Updated interactive-tree male and female panels to use softer theme-compatible colours.

## [1.1.0-beta.1] - 2026-06-18

### Added

- Public beta packaging and installation documentation.
- GPL-3.0-or-later licence file.
- Documentation for compatibility, optional integrations, rollback and issue reporting.

### Changed

- Generalised the module description for use on any webtrees site.
- Listed Jason Potts as the module author.
- Disabled automatic activation for safer public installation.
- Removed the site-specific support URL pending creation of the GitHub repository.
- Retained all visual and functional improvements from private release 1.0.40.

### Removed

- Development backup file `resources/js/theme.js.bak`.
- Site-specific branding and private support link.

## [1.0.40] - 2026-06-18

- Aligned the optional history-region selector with other utility navigation items.
- Preserved the unboxed event-title styling introduced in 1.0.39.

## [1.0.39] - 2026-06-18

- Removed the event-title border, background and shadow at the JavaScript source.
- Kept the event icon and title directly on the fact card.

## Earlier development releases

Versions 0.9.x through 1.0.38 were private development releases used while refining responsive layouts, menus, event cards, icons, settings and modal compatibility.


## 1.1.1-beta.12

- Adds theme-side support for the Potts Hero Slideshow below-frame caption strip, so captions are rendered outside the exact photo frame and are no longer clipped.

### 1.2.0 test 16
- Fixed the biography silhouette being hidden by the theme's older global placeholder-suppression rule.
- Exempted the biography fallback image from JavaScript silhouette replacement.