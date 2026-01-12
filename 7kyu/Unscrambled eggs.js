/**
 * 7 kyu
 * Unscrambled eggs
 * https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/javascript
 *
 * Removes all occurrences of the substring `"egg"` from a word.
 *
 * The function iterates through the string character by character.
 * When it encounters the sequence `"egg"`, it skips over it; otherwise,
 * it appends the current character to the result.
 *
 * @param {string} word - The input string that may contain `"egg"` substrings.
 * @returns {string} A new string with all `"egg"` substrings removed.
 *
 * @example
 * unscrambleEggs("ceggodegge") // "code"
 * unscrambleEggs("eggplant")  // "plant"
 * unscrambleEggs("hello")     // "hello"
 */
function unscrambleEggs(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    word[i] === "e" && word[i + 1] === "g" && word[i + 2] === "g"
      ? (i += 2)
      : (result += word[i]);
  }
  return result;
}
