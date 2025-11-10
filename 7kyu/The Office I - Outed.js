/**
 * 7 kyu
 * The Office I - Outed
 * https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/javascript
 *
 * Calculates the average happiness score of a team and returns feedback
 * based on the result. The boss’s score is counted twice.
 *
 * - If the average score (including the boss's double weight) is **5 or less**,
 *   returns `"Get Out Now!"`
 * - Otherwise, returns `"Nice Work Champ!"`
 *
 * @param {{ [key: string]: number }} meet - An object containing team member names as keys and happiness scores as values
 * @param {string} boss - The name of the boss, whose score counts twice in the average
 * @returns {string} Feedback message based on the average score
 *
 * @example
 * outed({ Alice: 5, Bob: 6, Carol: 4 }, "Bob")
 * // => "Nice Work Champ!"  (average is (5 + 6*2 + 4)/4 = 5.25)
 *
 * outed({ Alice: 4, Bob: 4, Carol: 4 }, "Carol")
 * // => "Get Out Now!"  (average is (4 + 4 + 4*2)/4 = 4)
 */
function outed(meet, boss) {
  let count = 0;
  for (const each in meet) {
    count += meet[each];
    if (each === boss) count += meet[each]; // Boss counts twice
  }
  return count / Object.keys(meet).length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}
