const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  getLength() {},
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !isNaN(position) == true &&
      position <= this.array.length &&
      position > 0
    ) {
      this.array.splice(position - 1, 1);
    } else {
      this.array = [];
      throw Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let stringAnswer = "";
    for (let i = 0; i < this.array.length; i++) {
      if (i === 0) {
        stringAnswer += `( ${this.array[i]} )`;
      } else {
        stringAnswer += `~~( ${this.array[i]} )`;
      }
    }
    this.array = [];
    return stringAnswer;
  },
};

module.exports = {
  chainMaker,
};
