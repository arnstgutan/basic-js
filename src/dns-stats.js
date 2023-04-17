const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
  let splitted = [];
  let obj = {};
  for (elem of array) {
    splitted.push(elem.split(".").reverse());
  }
  for (let i = 0; i < splitted.length; i++) {
    let substr = "";
    for (let j = 0; j < splitted[i].length; j++) {
      substr += "." + splitted[i][j];
      if (substr in obj) {
        obj[substr] += 1;
      } else {
        obj[substr] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
