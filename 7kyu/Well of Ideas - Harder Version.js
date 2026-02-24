/**
 * 7 kyu
 * Well of Ideas - Harder Version
 * https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/javascript
 *
 * Evaluates a nested array of values and determines the publishing outcome
 * based on the number of case-insensitive occurrences of the word "good".
 *
 * Rules:
 * - 0 occurrences   → "Fail!"
 * - 1–2 occurrences → "Publish!"
 * - 3+ occurrences  → "I smell a series!"
 *
 * Stops iterating early once 3 matches are found for performance reasons.
 *
 * @param {Array<Array<unknown>>} x - A two-dimensional array containing values to inspect.
 * @returns {"Fail!" | "Publish!" | "I smell a series!"}
 *
 * @example
 * well([["bad", "bad"], ["bad"]]);
 * // → "Fail!"
 *
 * @example
 * well([["good", "bad"], ["bad"]]);
 * // → "Publish!"
 *
 * @example
 * well([["good"], ["good"], ["good"]]);
 * // → "I smell a series!"
 *
 * @example
 * well([["GOOD", 123], [null, "Good"]]);
 * // → "Publish!" (case-insensitive, ignores non-strings)
 */

function well(x) {
  let count = 0;
  for (const eachArr of x) {
    for (const eachWord of eachArr) {
      if (typeof eachWord != "string") continue;
      if (eachWord.toLowerCase() === "good") count++;
      if (count === 3) return "I smell a series!";
    }
  }
  return count > 0 ? "Publish!" : "Fail!";
}
