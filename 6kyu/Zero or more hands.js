/**
 * 6 kyu
 * Zero or more hands
 * https://www.codewars.com/kata/6a5c17e763f7de3497eec2e2/javascript
 *
 * Works out which hand types more of a word's letters on a QWERTY keyboard.
 *
 * The check uses the standard touch-typing split. Keys y, u, i, o, p, h, j,
 * k, l, n, and m count as right hand. Every other character counts as left
 * hand. The function stops early as soon as it sees both hands in use.
 *
 * @param {string} word - The word to check. Case matters, since the set
 *   only lists lower-case letters; upper-case letters count as left hand.
 * @returns {"LEFT"|"RIGHT"|"BOTH"|"NONE"} "RIGHT" if every letter is a
 *   right-hand key, "LEFT" if every letter is a left-hand key, "BOTH" if
 *   the word uses both hands, or "NONE" if the word is empty.
 *
 * @example
 * whichHand("pin"); // "RIGHT" — p, i, and n are all right-hand keys
 *
 * @example
 * whichHand("cat"); // "LEFT" — c, a, and t are all left-hand keys
 *
 * @example
 * whichHand("hello"); // "BOTH" — h, l, and o are right-hand, but e is left-hand
 */
function whichHand(word) {
  const rightHand = new Set([
    "y",
    "u",
    "i",
    "o",
    "p",
    "h",
    "j",
    "k",
    "l",
    "n",
    "m",
  ]);
  let leftCount = 0;
  let rightCount = 0;
  for (const each of word) {
    rightHand.has(each) ? rightCount++ : leftCount++;
    if (leftCount > 0 && rightCount > 0) return "BOTH";
  }
  if (leftCount === 0 && rightCount === 0) return "NONE";
  return leftCount > 0 ? "LEFT" : "RIGHT";
}
