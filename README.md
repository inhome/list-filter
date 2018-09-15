# list-model

List filtering and selection logic separated from DOM rendering.

Run `node test.js` from this folder.

## filterItems

Case-insensitive substring search for records with string titles. Preserve source ordering.

## toggleId

Return a new selection array. Existing arrays remain unchanged.

## pageItems

Use one-based page numbers. A page beyond the end is empty.
