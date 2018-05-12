"use strict";

function filterItems(items, query) {
  var needle = String(query).trim().toLowerCase();
  return items.filter(function (item) { return item.title.toLowerCase().indexOf(needle) !== -1; });
}

function toggleId(ids, id) {
  return ids.indexOf(id) === -1 ? ids.concat([id]) : ids.filter(function (value) { return value !== id; });
}

module.exports = { filterItems: filterItems, toggleId: toggleId };
