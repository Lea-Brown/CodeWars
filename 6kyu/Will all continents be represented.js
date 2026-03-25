/**
 * 6 kyu
 * Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
 * https://www.codewars.com/kata/58291fea7ff3f640980000f9/javascript
 *
 * Checks whether the provided list of developers includes at least one person
 * from every continent: Africa, Americas, Europe, Asia, and Oceania.
 *
 * @param {Array<{ continent: "Africa" | "Americas" | "Europe" | "Asia" | "Oceania" }>} list
 * An array of developer objects containing a `continent` property.
 *
 * @returns {boolean} Returns `true` if at least one developer from each continent
 * is present in the list, otherwise `false`.
 *
 * @example
 * const devs = [
 *   { continent: "Europe" },
 *   { continent: "Asia" },
 *   { continent: "Africa" },
 *   { continent: "Americas" },
 *   { continent: "Oceania" }
 * ];
 *
 * allContinents(devs); // true
 *
 * @example
 * const devs = [
 *   { continent: "Europe" },
 *   { continent: "Asia" },
 *   { continent: "Africa" }
 * ];
 *
 * allContinents(devs); // false
 */

function allContinents(list) {
  let countries = {
    Africa: 0,
    Americas: 0,
    Europe: 0,
    Asia: 0,
    Oceania: 0,
  };

  for (const { continent } of list) {
    countries[continent]++;
  }

  for (const each in countries) {
    if (countries[each] === 0) return false;
  }

  return true;
}

// Only one loop
function allContinents(list) {
  const seen = {
    Africa: false,
    Americas: false,
    Europe: false,
    Asia: false,
    Oceania: false,
  };

  let count = 0;

  for (const { continent } of list) {
    if (!seen[continent]) {
      seen[continent] = true;
      count++;
      if (count === 5) return true;
    }
  }

  return false;
}
