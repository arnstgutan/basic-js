const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let ind;
  let max = 0;
  let nArray = String(n).split("");
  for (let i = 0; i < nArray.length; i++) {
    let clone = nArray.slice(0);
    clone.splice(i, 1);
    let actNum = +clone.join("");
    if (actNum >= max) {
      ind = i;
      max = actNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
