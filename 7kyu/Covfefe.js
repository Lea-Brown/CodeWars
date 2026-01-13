/**
 * 7 kyu
 * Covfefe
 * https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/javascript
 *
 * Ensures the word "covfefe" appears in a string.
 *
 * If the input string already contains the word "coverage", all occurrences
 * of "coverage" are replaced with "covfefe". Otherwise, the string
 * " covfefe" is appended to the end of the input.
 *
 * @param {string} str - The input string to process.
 * @returns {string} The modified string with "covfefe" ensured.
 *
 * @example
 * covfefe("full coverage plan") // "full covfefe plan"
 * covfefe("coverage coverage")  // "covfefe covfefe"
 * covfefe("no insurance")       // "no insurance covfefe"
 */
function covfefe(str) {
  return str.includes("coverage")
    ? str.replace(/coverage/g, "covfefe")
    : str + " covfefe";
}
