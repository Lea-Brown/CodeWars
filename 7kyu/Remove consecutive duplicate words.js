/**
 * 7 kyu
 * Remove consecutive duplicate words
 * https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/javascript
 *
 * Removes consecutive duplicate words from a space-separated string.
 *
 * @param {string} string - The input string containing words separated by spaces.
 * @return {string} A new string with consecutive duplicate words removed.
 *
 * @example
 * removeConsecutiveDuplicates("hello hello world"); // "hello world"
 * removeConsecutiveDuplicates("a a a b c c d"); // "a b c d"
 * removeConsecutiveDuplicates(""); // ""
 */
function removeConsecutiveDuplicates(string) {
  if (string === "") return "";
  let strArr = string.split(" ");
  let result = [strArr[0]];
  for (let i = 1; i < strArr.length; i++) {
    if (result[result.length - 1] !== strArr[i]) result.push(strArr[i]);
  }
  return result.join(" ");
}
