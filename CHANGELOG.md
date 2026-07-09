# 1.1.1

- Adds layout-only integration for Potts Hero Slideshow v1.0.0+.
- Detects homepage blocks containing `.ourfamily-hero` and marks them as the Potts Modern homepage hero.
- Moves the hero block above the normal homepage columns so it can display as a full-width banner.
- Removes the usual block/card header, padding and background around the hero block.
- Passes Potts Modern colour variables through to the slideshow module.
- Leaves slideshow markup, image styling, captions, transitions, selector dots, timing and upload handling to Potts Hero Slideshow.

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

- Preserved Bootstrap's collapsed state for unchecked historic, associated and close-relative facts.
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
