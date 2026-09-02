# Potts Modern Theme 1.4.0-alpha.10

This test release focuses on mobile readability and translation catalogue completeness for the individual page.

## Fixes

- **Biography block on mobile (#31):** below the Bootstrap `md` breakpoint (767.98 px), the portrait now stacks above the biography details instead of leaving the person information squeezed into a narrow column beside the image. The portrait is centred and capped at 260 px wide, the biography uses the full available width and the Birth/Death vital information switches to a single-column layout.
- **Individual navigation translation catalogue (#30):** added the missing `Person navigation`, `Explore this person` and explanatory navigation text to `resources/lang/messages.pot`, with references to the current `individual-page-tabs.phtml` lines.

## Retained compatibility fixes

- Repository Hierarchy source-citation actions remain protected from Potts Modern's fact-artwork cleanup, including copy/paste citation controls used on Facts and Events (#22).
- Replacement silhouettes continue to omit webtrees' `wt-icon-flip-rtl` utility class so third-party modules such as Extended Family do not display mirrored silhouettes (#19).
- Alpha.9 compatibility fixes for module access-level forms and translated homepage layout remain in place.

## Testing before publication

- Check the Biography block on a real phone in portrait orientation and confirm the portrait appears above the person details with no cramped text.
- Recheck Repository Hierarchy with a copied source citation while toggling the Relationship option.
- Recheck Extended Family on a person without a photograph to confirm the silhouette is displayed with the correct orientation.

The update feed should remain on the currently published release until these checks are complete and alpha.10 is published.