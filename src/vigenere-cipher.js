const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(isDirect) {
    this.isDirect = isDirect;
  }

  encrypt(text, key) {
    if (
      text === undefined ||
      text === null ||
      key === undefined ||
      key === null ||
      !key ||
      !text
    ) {
      throw new Error("Incorrect arguments!");
    }
    var isAlpha = function (ch) {
      if ((ch >= "A" && ch <= "z") || (ch >= "a" && ch <= "z")) {
        return true;
      }
    };
    var textSjat = "";
    for (let i = 0; i < text.length; i++) {
      if (isAlpha(text[i])) {
        textSjat += text[i].toUpperCase();
      }
    }
    var textSjatLength = textSjat.length;
    var keyForUse = "";
    while (keyForUse.length < textSjatLength) {
      keyForUse += key.toUpperCase();
    }
    let keyReady = keyForUse.slice(0, textSjatLength);

    var j = 0;
    var result = "";
    for (let i = 0; i < text.length; i++) {
      if (isAlpha(text[i])) {
        let Mj = this.alphabet.indexOf(textSjat[j]);
        let Kj = this.alphabet.indexOf(keyReady[j]);
        let Cj = (Mj + Kj) % 26;
        result += this.alphabet[Cj];
        j++;
      } else {
        result += text[i];
      }
    }
    if (this.isDirect === false) {
      return result.split().reverse().join();
    } else {
      return result;
    }
  }
  decrypt(text, key) {
    if (
      text === undefined ||
      text === null ||
      key === undefined ||
      key === null ||
      !key ||
      !text
    ) {
      throw new Error("Incorrect arguments!");
    }

    var isAlpha = function (ch) {
      if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
        return true;
      }
    };

    var textSjat = "";
    for (let i = 0; i < text.length; i++) {
      if (isAlpha(text[i])) {
        textSjat += text[i].toUpperCase();
      }
    }
    var textSjatLength = textSjat.length;
    var keyForUse = "";
    while (keyForUse.length < textSjatLength) {
      keyForUse += key.toUpperCase();
    }
    let keyReady = keyForUse.slice(0, textSjatLength);

    var j = 0;
    var result = "";
    for (let i = 0; i < text.length; i++) {
      if (isAlpha(text[i])) {
        let Cj = this.alphabet.indexOf(textSjat[j]);
        let Kj = this.alphabet.indexOf(keyReady[j]);
        let Mj = Cj > Kj ? (Cj - Kj) % 26 : (26 + (Cj - Kj)) % 26;
        result += this.alphabet[Mj];
        j++;
      } else {
        result += text[i];
      }
    }
    if (this.isDirect === false) {
      return result.split().reverse().join();
    } else {
      return result;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
