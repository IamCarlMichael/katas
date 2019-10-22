var assert = require("assert");

function parseQueryToString(query) {
  let string = "?";
  const keys = Object.keys(query);
  const lastKey = keys[keys.length - 1];
  for (const [key, value] of Object.entries(query)) {
    if (key !== lastKey) {
      string = string.concat(key + "=" + value + "&");
    } else {
      string = string.concat(key + "=" + value);
    }
  }
  return string;
}

const query0 = {};
parseQueryToString(query0);
const actual0 = parseQueryToString(query0);
console.log(actual0);
assert.strictEqual(actual0, "?");

const query = { author: "Alice", title: "Travel" };
parseQueryToString(query);
const actual = parseQueryToString(query);
console.log(actual);
assert.strictEqual(actual, "?author=Alice&title=Travel");

const query2 = { author: "Alice", title: "Travel", isbn: "123" };
parseQueryToString(query2);
const actual2 = parseQueryToString(query2);
console.log(actual2);
assert.strictEqual(actual2, "?author=Alice&title=Travel&isbn=123");
