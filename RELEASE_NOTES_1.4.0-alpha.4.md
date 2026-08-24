# Potts Modern Theme 1.4.0-alpha.4

## GitHub issue #21 — fact action controls after tab changes

This test release fixes edit, copy and delete controls that could disappear after leaving the **Facts and Events** tab and returning to it.

### Changes

- Protects webtrees fact action links/buttons from the theme's legacy event-artwork cleanup.
- Recognises action controls through their webtrees action container, icon classes, action routes and data attributes, reducing dependence on English text labels.
- Restores any action control that was previously given the theme's `potts-legacy-fact-symbol` hidden state.
- Runs the restoration both before and after fact-card enhancement so AJAX/tab-created controls remain available.

### Regression retained

The 1.4.0-alpha.3 overflow fix for edit menus and enhanced selector result lists remains included.

### Suggested test

1. Open an individual with permission to edit facts.
2. Confirm edit/copy/delete controls are visible on **Facts and Events**.
3. Switch to **Families**, **Sources** or another tab.
4. Switch back to **Facts and Events** without reloading the page.
5. Confirm the action controls are still visible and functional.
6. Repeat the tab switch several times.
