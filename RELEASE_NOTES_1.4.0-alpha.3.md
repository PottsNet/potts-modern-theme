# Potts Modern Theme 1.4.0-alpha.3

## GitHub issue #24 – CSS overflow

This test release fixes clipping of webtrees editing controls caused by the theme's rounded-card `overflow: hidden` treatment.

### Changed

- Edit-page cards, sections and fieldsets can now overflow when webtrees needs to display menus or enhanced selectors outside the card boundary.
- AJAX edit modals receive the same treatment.
- Individual Facts and Events cards only relax clipping when they actually contain a dropdown, listbox, combobox or enhanced selector.
- Select2, Choices and Tom Select result panes can scroll vertically when the result list is long.

### Intended result

The **Modify** menu and results on pages such as **Link spouse to individual** should remain fully visible instead of being cut off at the edge of the surrounding card or section.

No general card styling has been removed; the override is deliberately limited to editing and interactive contexts.
