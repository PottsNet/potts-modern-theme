# Potts Modern Theme 1.4.0-alpha.9

This test release focuses on two compatibility fixes reported against webtrees 2.2.6.

## Fixes

- **Module access levels (#27):** Potts Modern can continue promoting Bootstrap modals to `<body>` so they remain clickable above their backdrop, while explicitly associating the modal controls with the original webtrees form. This preserves access-level fields such as `access-trees-menu-1` when the Menus or Blocks page is saved.
- **Translated homepage layout (#18):** Potts Modern now recognises its homepage using the language-independent `data-potts-homepage` marker supplied by the theme view. Homepage layout protection no longer depends on English block headings, so the main and sidebar columns should remain correctly arranged when signed in with non-English languages and the Favorites block enabled.

## Retained alpha.8 fixes

- Repository Hierarchy source-citation action compatibility.
- Silhouette directional-flip compatibility for third-party modules.

## Testing

The two fixes above were tested successfully on webtrees 2.2.6 before publication: module access-level changes saved correctly, and a logged-in Spanish homepage retained its main/sidebar layout without requiring Potts Hero Slideshow.
