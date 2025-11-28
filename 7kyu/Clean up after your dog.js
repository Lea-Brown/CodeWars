/**
 * 7 kyu
 * Clean up after your dog
 * https://www.codewars.com/kata/57faa6ff9610ce181b000028/javascript
 *
 * Determines whether the garden can be cleaned based on the amount of dog mess,
 * the number of bags available, and each bag's capacity. Returns "Dog!!" if a dog
 * is present, "Clean" if the total capacity is enough, otherwise "Cr@p".
 *
 * @param {string[][]} x - A 2D array representing the garden layout, where "@" is mess and "D" is a dog.
 * @param {number} bags - The number of bags available.
 * @param {number} cap - The capacity of each bag.
 * @returns {"Dog!!" | "Clean" | "Cr@p"} The garden status.
 *
 * @example
 * crap([["@", "."], ["@", "."]], 2, 1); // "Clean"
 * crap([["@", "D"], [".", "."]], 1, 1); // "Dog!!"
 * crap([["@", "@", "@"], ["@", "."]], 1, 2); // "Cr@p"
 */
function crap(x, bags, cap) {
  let at = 0;
  for (const array of x) {
    for (const each of array) {
      if (each === "D") return "Dog!!";
      if (each === "@") at++;
    }
  }
  return at <= bags * cap ? "Clean" : "Cr@p";
}
