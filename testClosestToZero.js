const { closestToZero } = require("./closestToZero");

const methods = require('./closestToZero');

console.log(`Should return:  0 | returned: ${methods.closestToZero(undefined)}`);
console.log(`Should return:  0 | returned: ${methods.closestToZero([])}`);
console.log(`Should return:  5 | returned: ${methods.closestToZero([8, 5, 10])}`);
console.log(`Should return: -1 | returned: ${methods.closestToZero([5, 4, -9, 6, -10, -1, 8])}`);
console.log(`Should return:  2 | returned: ${methods.closestToZero([8, 2, 3, -2])}`);
console.log(`Should return:  0 | returned: ${methods.closestToZero([2, 0])}`);
console.log(`Should return:  6 | returned: ${methods.closestToZero([6])}`);
