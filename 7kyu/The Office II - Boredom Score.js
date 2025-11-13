/**
 * 7 kyu
 * The Office II - Boredom Score
 * https://www.codewars.com/kata/57ed4cef7b45ef8774000014/javascript
 *
 * Calculates the overall "boredom score" of a team based on their departments.
 * Each department contributes a specific boredom value.
 *
 * The total score determines how exciting or dull the workplace is:
 * - 80 or less: "kill me now"
 * - 81–99: "i can handle this"
 * - 100 or more: "party time!!"
 *
 * @param {Object} staff - An object where each key is a staff member’s name and each value is their department.
 * @returns {string} A message indicating the overall team mood.
 *
 * @example
 * boredom({
 *   tim: "change",
 *   jim: "accounts",
 *   katie: "IS"
 * });
 * // "i can handle this"
 */
function boredom(staff) {
  const departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let count = 0;

  for (const each in staff) {
    count += departments[staff[each]];
  }

  return count <= 80
    ? "kill me now"
    : count < 100
    ? "i can handle this"
    : "party time!!";
}
