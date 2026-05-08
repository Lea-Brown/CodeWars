/**
 * 7 kyu
 * Partial Word Searching
 * https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript
 *
 * Searches an array of strings and returns those containing the query.
 *
 * @param {string} query - The substring to search for (case-insensitive).
 * @param {string[]} seq - The list of words to search through.
 * @returns {string[]} A list of matching words, or ["Empty"] if none match.
 *
 * @example
 * wordSearch("app", ["Apple", "Banana", "Pineapple"]);
 * // ["Apple", "Pineapple"]
 *
 * @example
 * wordSearch("cat", ["dog", "bird", "fish"]);
 * // ["Empty"]
 *
 * @example
 * wordSearch("lo", ["Hello", "World", "Low", "Follow"]);
 * // ["Hello", "Low", "Follow"]
 */

function wordSearch(query, seq) {
  let result = [];
  query = query.toLowerCase();
  for (const word of seq) {
    if (query.length > word.length) continue;
    if (word.toLowerCase().includes(query)) result.push(word);
  }
  return result.length === 0 ? ["Empty"] : result;
}
