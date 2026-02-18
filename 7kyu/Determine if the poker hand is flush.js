/**
 * 7 kyu
 * Determine if the poker hand is flush
 * https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/javascript
 *
 * Determines whether all cards in the array share the same suit.
 *
 * Each card is represented as a string where the final character
 * indicates the suit (e.g. "AH", "10D", "KC", "7S").
 *
 * @param {string[]} cards - An array of card strings.
 * @returns {boolean} True if all cards have the same suit; otherwise false.
 *
 * @example
 * isFlush(["AH", "KH", "QH", "JH", "10H"]); // true
 *
 * @example
 * isFlush(["AH", "KH", "QD", "JH", "10H"]); // false
 *
 * @example
 * isFlush([]); // true (vacuously true — no mismatched suits)
 */

function isFlush(cards) {
  const suit = cards[0]?.at(-1);
  return cards.every((card) => card.at(-1) === suit);
}
