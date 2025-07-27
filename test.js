const assert = require('assert');

function add(a, b) {
    return a + b;
}

assert.strictEqual(add(1, 2), 3, 'add(1, 2) should be 3');
assert.strictEqual(add(5, 5), 10, 'add(5, 5) should be 10');
