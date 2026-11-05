/**
 * 7 kyu
 * Cat Years, Dog Years (2)
 * https://www.codewars.com/kata/5a6d3bd238f80014a2000187/javascript
 *
 * Calculates the human-equivalent ages of a cat and a dog.
 *
 * @param {number} catYears - The cat's age in human years.
 * @param {number} dogYears - The dog's age in human years.
 * @returns {[number, number]} An array containing the cat's and dog's
 * human-equivalent ages, respectively.
 *
 * @example
 * ownedCatAndDog(15, 15); // [1, 1]
 *
 * @example
 * ownedCatAndDog(24, 24); // [2, 2]
 *
 * @example
 * ownedCatAndDog(32, 34); // [4, 4]
 */
function ownedCatAndDog(catYears, dogYears) {
  function calculateYears(years, interval) {
    if (years < 15) return 0;
    if (years < 24) return 1;
    if (years < 28) return 2;
    return 2 + Math.floor((years - 24) / interval);
  }
  return [calculateYears(catYears, 4), calculateYears(dogYears, 5)];
}
