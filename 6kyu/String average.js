/**
 * 6 kyu
 * String average
 * https://www.codewars.com/kata/5966847f4025872c7d00015b/javascript
 *
 * Calculates the average value of a space-separated list of number words
 * and returns the floored average as a number word.
 *
 * Valid number words are: "zero" through "nine".
 * Returns `"n/a"` if any word is invalid.
 *
 * @param {string} str - A space-separated string of number words.
 * @returns {string} The floored average as a number word, or `"n/a"` if the input contains an invalid word.
 *
 * @example
 * averageString("zero nine");
 * // => "four"
 *
 * @example
 * averageString("one two three four five");
 * // => "three"
 *
 * @example
 * averageString("one two ten");
 * // => "n/a"
 */
function averageString(str) {
  let num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const reversed = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let acc = 0;
  let count = 0;
  for (const each of str.split(" ")) {
    if (!Object.hasOwn(num, each)) return "n/a";
    acc += num[each];
    count++;
  }
  let result = Math.floor(acc / count);
  return reversed[result];
}
