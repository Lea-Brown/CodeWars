/**
 * 7 kyu
 * Exclamation marks series #5: Remove all exclamation marks from the end of words
 * https://www.codewars.com/kata/57faf32df815ebd49e000117/javascript
 *
 * Removes all trailing exclamation marks from each word in a string.
 *
 * @param {string} string - The input string.
 * @returns {string} The string with trailing exclamation marks removed from each word.
 *
 * @example
 * remove("Hi!!! world!!");
 * // Returns: "Hi world"
 *
 * @example
 * remove("Hello! How are you!!!");
 * // Returns: "Hello How are you"
 *
 * @example
 * remove("No! exclamation!!! marks!");
 * // Returns: "No exclamation marks"
 */
function remove(string) {
  return string
    .split(" ")
    .map((each) => {
      for (let i = each.length - 1; i >= 0; i--) {
        if (each[i] !== "!") return each.slice(0, i + 1);
      }
    })
    .join(" ");
}
