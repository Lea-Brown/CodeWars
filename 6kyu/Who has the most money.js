/**
 * 6 kyu
 * Who has the most money?
 * https://www.codewars.com/kata/528d36d7cc451cd7e4000339/javascript
 *
 * Finds the student with the most money.
 *
 * @param {Array} students
 * @returns {string} The winner's name, or "all" if everyone has the same amount.
 *
 * @example
 * mostMoney([
 *   { name: "Cameron", fives: 2, tens: 2, twenties: 0 },
 *   { name: "Geoff", fives: 0, tens: 3, twenties: 0 }
 * ]);
 * // "Cameron"
 *
 * @example
 * mostMoney([
 *   { name: "Andy", fives: 2, tens: 0, twenties: 1 },
 *   { name: "Stephen", fives: 0, tens: 2, twenties: 1 }
 * ]);
 * // "all"
 *
 * @example
 * mostMoney([
 *   { name: "Sarah", fives: 1, tens: 0, twenties: 0 }
 * ]);
 * // "Sarah"
 */
function mostMoney(students) {
  if (students.length === 1) return students[0].name;
  const amounts = students.map(
    (student) => student.fives * 5 + student.tens * 10 + student.twenties * 20,
  );
  const max = Math.max(...amounts);
  if (amounts.every((amount) => amount === max)) {
    return "all";
  }
  return students[amounts.indexOf(max)].name;
}
