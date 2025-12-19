/**
 * 7 kyu
 * Bingo ( Or Not )
 * https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/javascript
 *
 * Checks if the given array contains all the winning bingo numbers.
 *
 * @param {number[]} a - An array of numbers representing called bingo numbers.
 * @returns {string} "WIN" if all winning numbers [2, 7, 9, 14, 15] are present, otherwise "LOSE".
 *
 * @example
 * bingo([1, 2, 7, 9, 14, 15, 20]); // Returns "WIN"
 * bingo([2, 7, 9, 14, 15]);        // Returns "WIN"
 * bingo([2, 7, 9, 14]);            // Returns "LOSE"
 * bingo([1, 3, 5, 7, 9]);          // Returns "LOSE"
 */

function bingo(a) {
  const clean = new Set(a);
  const WINNERS = new Set([2, 7, 9, 14, 15]);
  let bingoCount = 0;
  for (const each of clean) {
    if (WINNERS.has(each)) bingoCount++;
    if (bingoCount === 5) return "WIN";
  }
  return "LOSE";
}

function bingo(a) {
  const clean = new Set(a);
  const WINNERS = [2, 7, 9, 14, 15];
  return WINNERS.every((num) => clean.has(num)) ? "WIN" : "LOSE";
}
