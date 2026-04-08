/**
 * 7 kyu
 * Witcher's Contract: The Bestiary
 * https://www.codewars.com/kata/69b9359e8af0beedadc87db9/train/javascript
 *
 * Identifies a monster by matching observed weaknesses against a bestiary.
 *
 * For each monster in the bestiary, a Set is created from its weaknesses to
 * allow fast lookup. If all observed weaknesses exist in the monster's
 * weakness list, that monster is returned.
 *
 * @param {string[]} observedWeaknesses - Weaknesses observed on the monster.
 * @param {Object.<string, string[]>} bestiary - Map of monster names to arrays of weaknesses.
 * @returns {string} The identified monster name, or "Unknown monster" if no match is found.
 *
 * @example
 * const bestiary = {
 *   vampire: ["garlic", "sunlight", "stake"],
 *   werewolf: ["silver", "wolfsbane"],
 *   troll: ["fire", "acid"]
 * };
 *
 * identifyMonster(["silver"], bestiary);
 * // → "werewolf"
 *
 * identifyMonster(["garlic", "sunlight"], bestiary);
 * // → "vampire"
 *
 * identifyMonster(["ice"]);
 * // → "Unknown monster"
 */

function identifyMonster(observedWeaknesses, bestiary) {
  for (const beast in bestiary) {
    const set = new Set(bestiary[beast]);
    if (observedWeaknesses.every((weaknesses) => set.has(weaknesses)))
      return beast;
  }
  return "Unknown monster";
}
