/**
 * 7 kyu
 * Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
 * https://www.codewars.com/kata/57fb142297e0860073000064/javascript
 *
 * Calculates the product of the number of exclamation marks (`!`)
 * and question marks (`?`) in a given string.
 *
 * The function iterates through the string once, counting each symbol,
 * and returns the multiplication of the two counts.
 *
 * @param {string} string - The input string to analyse.
 * @returns {number} The product of `!` count and `?` count.
 *
 * @example
 * product("!??!") // 4
 * product("Hello!?") // 1
 * product("No punctuation") // 0
 */
function product(string) {
  let exc = 0;
  let que = 0;
  for (const each of string) {
    if (each === "!") exc++;
    if (each === "?") que++;
  }
  return exc * que;
}
