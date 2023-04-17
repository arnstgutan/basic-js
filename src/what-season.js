const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == undefined || date == null) {
    return "Unable to determine the time of year!";
  } else if (
    Date.prototype.toString.call(new Date()) == date.toString() ||
    date == NaN ||
    new Date(date) == "Invalid Date" ||
    date == "Invalid Date" ||
    Object.prototype.toString.call(date) != "[object Date]" ||
    new Date(date.toString()).getFullYear() != date.getFullYear()
  ) {
    throw new Error("Invalid date!");
  } else {
    let month = date.getMonth();
    if (month == 11 || (month >= 0 && month < 2)) {
      return "winter";
    } else if (month >= 2 && month < 5) {
      return "spring";
    } else if (month >= 5 && month < 8) {
      return "summer";
    } else if (month >= 8 && month < 11) {
      return "fall";
    }
  }
}
module.exports = {
  getSeason,
};
