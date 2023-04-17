const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  answerStr = "";
  str = String(str);

  function additionRepeater(str = "", options) {
    additionStr = "";

    if (!Object.hasOwn(options, "additionRepeatTimes")) {
      additionStr += str;
    }
    for (let i = 0; i < options["additionRepeatTimes"]; i++) {
      if (i != options["additionRepeatTimes"] - 1) {
        if (Object.hasOwn(options, "additionSeparator")) {
          additionStr += str + options["additionSeparator"];
        } else {
          additionStr += str + "|";
        }
      } else {
        additionStr += str;
      }
    }
    return additionStr;
  }
  if (!Object.hasOwn(options, "repeatTimes")) {
    answerStr += str + additionRepeater(options["addition"], options);
  }
  for (let i = 0; i < options["repeatTimes"]; i++) {
    if (i != options["repeatTimes"] - 1) {
      if (Object.hasOwn(options, "separator")) {
        answerStr +=
          str +
          additionRepeater(options["addition"], options) +
          options["separator"];
      } else {
        answerStr += str + additionRepeater(options["addition"], options) + "+";
      }
    } else {
      answerStr += str + additionRepeater(options["addition"], options);
    }
  }
  return answerStr;
}

module.exports = {
  repeater,
};
