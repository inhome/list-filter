"use strict";

function filterItems(items, query) {
  var needle = String(query).trim().toLowerCase();
  return items.filter(function (item) { return item.title.toLowerCase().indexOf(needle) !== -1; });
}

function toggleId(ids, id) {
  return ids.indexOf(id) === -1 ? ids.concat([id]) : ids.filter(function (value) { return value !== id; });
}

function pageItems(items, page, size) {
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(size) || size < 1) throw new RangeError("Invalid pagination");
  return items.slice((page - 1) * size, page * size);
}

module.exports = { filterItems: filterItems, toggleId: toggleId, pageItems: pageItems };
