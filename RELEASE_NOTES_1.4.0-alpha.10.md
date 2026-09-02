# Potts Modern Theme 1.4.0-alpha.10

This release focuses on mobile Biography readability and translation catalogue completeness for the individual page.

## Fixes

- **Biography block on mobile (#31):** below the Bootstrap `md` breakpoint (767.98 px), the Biography becomes a deliberate one-column sequence. The portrait is centred and capped at 260 px wide, the existing person-name heading appears immediately below it, followed by lifespan, badges, vital details, marriages, life summary and family information.
- **Fallback portrait flow on phones (#31):** the generated `No known portrait` fallback is returned to normal document flow on mobile instead of remaining absolutely positioned. This prevents the portrait from covering the person’s name or following Biography content.
- **Individual navigation translation catalogue (#30):** added the missing `Person navigation`, `Explore this person` and explanatory navigation text to `resources/lang/messages.pot`.

## Other improvement

- **Contributions menu icon:** recognises the Contributions menu label/class and supplies a dedicated person/document/plus icon so the Family Contributions entry is represented consistently in Potts Modern navigation.

## Retained compatibility fixes

- Repository Hierarchy source-citation actions remain protected from Potts Modern's fact-artwork cleanup, including copy/paste citation controls used on Facts and Events (#22).
- Replacement silhouettes continue to omit webtrees' `wt-icon-flip-rtl` utility class so third-party modules such as Extended Family do not display mirrored silhouettes (#19).
- Alpha.9 compatibility fixes for module access-level forms and translated homepage layout remain in place.

## Testing

- The #31 Biography fix was tested through several iterations on the live webtrees 2.2.6 site using an iPhone in portrait orientation.
- The confirmed final layout displays the fallback portrait first and the person’s name immediately underneath without overlap or cramped side-by-side text.
- #22 and #19 remain open pending their separate reporter/module testing; this release does not claim those issues newly resolved.
