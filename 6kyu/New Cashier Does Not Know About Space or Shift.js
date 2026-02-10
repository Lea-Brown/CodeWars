/**
 * 6 kyu
 * New Cashier Does Not Know About Space or Shift
 * https://www.codewars.com/kata/5d23d89906f92a00267bb83d/javascript
 *
 * Parses a concatenated order string and returns the ordered menu items
 * as a space-separated, capitalised string in menu order.
 *
 * The function scans the input character-by-character, identifies menu
 * items based on their starting letters, counts occurrences, and then
 * reconstructs the order in a fixed menu sequence.
 *
 * Assumes the input string contains only valid, lowercase menu item names
 * concatenated together with no separators.
 *
 * @param {string} input - A lowercase string containing concatenated menu items
 * (e.g. "burgerfriescoke").
 *
 * @returns {string} A space-separated string of menu items in the correct order.
 *
 * @example
 * getOrder("burgerfriescoke") // "Burger Fries Coke"
 * getOrder("milkshakepizzachicken") // "Chicken Pizza Milkshake"
 * getOrder("") // ""
 */
function getOrder(input) {
  console.log(input);
  let obj = {
    Burger: 0,
    Fries: 0,
    Chicken: 0,
    Pizza: 0,
    Sandwich: 0,
    Onionrings: 0,
    Milkshake: 0,
    Coke: 0,
  };
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "b") {
      obj["Burger"] = obj["Burger"] + 1;
      i += 5;
      continue;
    }
    if (input[i] === "f") {
      obj["Fries"] = obj["Fries"] + 1;
      i += 4;
      continue;
    }
    if (input[i] === "p") {
      obj["Pizza"] = obj["Pizza"] + 1;
      i += 4;
      continue;
    }
    if (input[i] === "s") {
      obj["Sandwich"] = obj["Sandwich"] + 1;
      i += 7;
      continue;
    }
    if (input[i] === "o") {
      obj["Onionrings"] = obj["Onionrings"] + 1;
      i += 9;
      continue;
    }
    if (input[i] === "m") {
      obj["Milkshake"] = obj["Milkshake"] + 1;
      i += 8;
      continue;
    }
    if (input[i] === "c" && input[i + 1] === "h") {
      obj["Chicken"] = obj["Chicken"] + 1;
      i += 6;
      continue;
    }
    if (input[i] === "c" && input[i + 1] === "o") {
      obj["Coke"] = obj["Coke"] + 1;
      i += 3;
      continue;
    }
  }
  for (const each in obj) {
    for (let i = 0; i < obj[each]; i++) {
      result.push(each);
    }
  }
  return result.join(" ");
}
