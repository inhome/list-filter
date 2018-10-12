"use strict";
var assert = require("assert");
var lib = require("./index");

var items = [{ id: 1, title: "Alpha" }, { id: 2, title: "Beta" }];
assert.deepStrictEqual(lib.filterItems(items, " ALP "), [items[0]]);
assert.strictEqual(lib.filterItems(items, "").length, 2);

var selection = [1];
assert.deepStrictEqual(lib.toggleId(selection, 2), [1, 2]);
assert.deepStrictEqual(lib.toggleId(selection, 1), []);
assert.deepStrictEqual(selection, [1]);

assert.deepStrictEqual(lib.pageItems([1, 2, 3], 2, 2), [3]);
assert.deepStrictEqual(lib.pageItems([], 1, 2), []);
assert.throws(function () { lib.pageItems([], 0, 2); }, RangeError);

var before = [{ id: 1, title: "old" }];
assert.strictEqual(lib.replaceItem(before, { id: 1, title: "new" })[0].title, "new");
assert.strictEqual(before[0].title, "old");

