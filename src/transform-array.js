const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let resultArr = [];
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "--discard-next": // if (x === 'value1')
          i++;
          break;

        case "--discard-prev": // if (x === 'value2')
          if (arr[i - 2] != "--discard-next") {
            resultArr.pop();
          }
          break;

        case "--double-next": // if (x === 'value2')
          if (arr[i + 1]) {
            resultArr.push(arr[i + 1]);
          }
          break;

        case "--double-prev": // if (x === 'value2')
          if (arr[i - 1] && arr[i - 2] !== "--discard-next") {
            resultArr.push(arr[i - 1]);
          }
          break;

        default:
          resultArr.push(arr[i]);
          break;
      }
    }
  }
  return resultArr;
}

module.exports = {
  transform,
};
