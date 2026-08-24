# Potts Modern Theme 1.4.0-alpha.6

## GitHub issue #22 — Repository Hierarchy paste-source control

This build adds explicit compatibility for source-citation action controls supplied by the Repository Hierarchy custom module.

### What changed

- Recognises Repository Hierarchy copy, paste, delete and sort citation action routes as genuine fact controls.
- Prevents the theme's legacy fact-artwork cleanup from hiding the **Paste copied source citation** icon.
- Preserves the action when webtrees rebuilds Facts and Events after the **Relationship** filter is toggled.
- Retains the fixes from 1.4.0-alpha.4 and 1.4.0-alpha.3.

### Suggested test

1. Copy a source citation using Repository Hierarchy.
2. Open an individual's Facts and Events tab.
3. Confirm the paste-source icon is available beside an eligible fact.
4. Enable the Relationship checkbox/filter.
5. Confirm the paste-source icon remains visible and functional.
6. Toggle the filter off and on again and repeat the test.
