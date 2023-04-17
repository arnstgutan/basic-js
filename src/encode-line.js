const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split("");
  let summ = 1;
  let result = array.map((elem, index, arr) => {
    if (elem !== arr[index + 1]) {
      if (summ === 1) {
        return elem;
      } else {
        let res = summ + elem;
        summ = 1;
        return res;
      }
    } else {
      summ++;
    }
  });
  return result.join("");
}

module.exports = {
  encodeLine,
};
