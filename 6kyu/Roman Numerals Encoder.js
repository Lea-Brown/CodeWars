/**
 * 6 kyu
 * Roman Numerals Encoder
 * https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript
 *
 * Converts an integer into its Roman numeral representation.
 *
 * @param {number} number The integer to convert.
 * @returns {string} The Roman numeral representation of the number.
 *
 * @example
 * solution(1994); // "MCMXCIV"
 *
 * @example
 * solution(58); // "LVIII"
 *
 * @example
 * solution(2026); // "MMXXVI"
 */
function solution(number) {
  let result = [];
  while (number > 0) {
    if (number >= 1000) {
      result.push("M");
      number -= 1000;
    } else if (number >= 900) {
      result.push("CM");
      number -= 900;
    } else if (number >= 500) {
      result.push("D");
      number -= 500;
    } else if (number >= 400) {
      result.push("CD");
      number -= 400;
    } else if (number >= 100) {
      result.push("C");
      number -= 100;
    } else if (number >= 90) {
      result.push("XC");
      number -= 90;
    } else if (number >= 50) {
      result.push("L");
      number -= 50;
    } else if (number >= 40) {
      result.push("XL");
      number -= 40;
    } else if (number >= 10) {
      result.push("X");
      number -= 10;
    } else if (number >= 9) {
      result.push("IX");
      number -= 9;
    } else if (number >= 5) {
      result.push("V");
      number -= 5;
    } else if (number >= 4) {
      result.push("IV");
      number -= 4;
    } else if (number >= 1) {
      result.push("I");
      number -= 1;
    }
  }
  return result.join("");
}

// ai helped create a cleaner version
function solution(number) {
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < decimals.length; i++) {
    while (number >= decimals[i]) {
      result += roman[i];
      number -= decimals[i];
    }
  }

  return result;
}
