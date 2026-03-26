/**
 * 6 kyu
 * Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
 * https://www.codewars.com/kata/5829ca646d02cd1a65000284/javascript
 *
 * Determines whether a list of developers contains at least one person
 * in every age group from teens through centenarians.
 *
 * Age groups checked:
 * - Teens (13–19)
 * - Twenties (20–29)
 * - Thirties (30–39)
 * - Forties (40–49)
 * - Fifties (50–59)
 * - Sixties (60–69)
 * - Seventies (70–79)
 * - Eighties (80–89)
 * - Nineties (90–99)
 * - Centenarian (100+)
 *
 * The function iterates through the list and tracks whether each age
 * group has been encountered. It returns early once all 10 groups
 * have been found.
 *
 * @param {{ age: number }[]} list - Array of objects containing an `age` property.
 * @returns {boolean} `true` if the list includes at least one person from every age group, otherwise `false`.
 *
 * @example
 * const developers = [
 *   { age: 19 }, { age: 25 }, { age: 34 }, { age: 47 }, { age: 52 },
 *   { age: 66 }, { age: 71 }, { age: 83 }, { age: 94 }, { age: 101 }
 * ];
 *
 * isAgeDiverse(developers);
 * // true
 *
 * @example
 * const developers = [
 *   { age: 19 }, { age: 25 }, { age: 34 }
 * ];
 *
 * isAgeDiverse(developers);
 * // false
 */

function isAgeDiverse(list) {
  let ages = {
    teens: false,
    twenties: false,
    thirties: false,
    forties: false,
    fifties: false,
    sixties: false,
    seventies: false,
    eighties: false,
    nineties: false,
    centenarian: false,
  };
  let count = 0;

  for (const { age } of list) {
    if (age >= 13 && age < 20) {
      if (!ages.teens) {
        ages.teens = true;
        count++;
      }
    } else if (age >= 20 && age < 30) {
      if (!ages.twenties) {
        ages.twenties = true;
        count++;
      }
    } else if (age >= 30 && age < 40) {
      if (!ages.thirties) {
        ages.thirties = true;
        count++;
      }
    } else if (age >= 40 && age < 50) {
      if (!ages.forties) {
        ages.forties = true;
        count++;
      }
    } else if (age >= 50 && age < 60) {
      if (!ages.fifties) {
        ages.fifties = true;
        count++;
      }
    } else if (age >= 60 && age < 70) {
      if (!ages.sixties) {
        ages.sixties = true;
        count++;
      }
    } else if (age >= 70 && age < 80) {
      if (!ages.seventies) {
        ages.seventies = true;
        count++;
      }
    } else if (age >= 80 && age < 90) {
      if (!ages.eighties) {
        ages.eighties = true;
        count++;
      }
    } else if (age >= 90 && age < 100) {
      if (!ages.nineties) {
        ages.nineties = true;
        count++;
      }
    } else if (age >= 100) {
      if (!ages.centenarian) {
        ages.centenarian = true;
        count++;
      }
    }

    if (count === 10) return true;
  }

  return false;
}

// chatGPT optimised
function isAgeDiverse(list) {
  const groups = new Set();

  for (const { age } of list) {
    if (age > 12) groups.add(Math.min(Math.floor(age / 10), 10));
    if (groups.size === 10) return true;
  }

  return false;
}
