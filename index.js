"use strict";

function filterItems(items, query) {
  var needle = String(query).trim().toLowerCase();
  return items.filter(function (item) { return item.title.toLowerCase().indexOf(needle) !== -1; });
}

module.exports = { filterItems: filterItems };
