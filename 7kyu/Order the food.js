/**
 * 7 kyu
 * Coding Meetup #14 - Higher-Order Functions Series - Order the food
 * https://www.codewars.com/kata/583952fbc23341c7180002fd/javascript
 *
 * Counts how many times each meal type appears in a list of developers.
 *
 * @param {{ meal: string }[]} list - Array of objects containing a `meal` property.
 * @returns {Record<string, number>} An object where keys are meal types and values are the number of occurrences.
 *
 * @example
 * const developers = [
 *   { firstName: "Anna", meal: "vegetarian" },
 *   { firstName: "Bob", meal: "standard" },
 *   { firstName: "Chris", meal: "vegetarian" }
 * ];
 *
 * orderFood(developers);
 * // { vegetarian: 2, standard: 1 }
 */

function orderFood(list) {
  let foodGroups = {};
  for (const { meal } of list) {
    foodGroups[meal] = (foodGroups[meal] || 0) + 1;
  }
  return foodGroups;
}
