/**
 * 7 kyu
 * Whose bicycle?
 * https://www.codewars.com/kata/5a2cb4bff28b820c33000082/javascript
 *
 * Determines which son should receive a bicycle based on the highest total score.
 *
 * Each argument represents a son and must be an object whose numeric values
 * contribute to that son's total score. The function compares the summed values
 * of each son's object and returns a sentence indicating which son has the
 * highest score. If scores tie, the later son in the argument list wins.
 *
 * @param {...Object<string, number>} args - Objects representing each son's scores.
 * @returns {string} A message stating which son should receive the bicycle.
 *
 * @example
 * whoseBicycle(
 *   { algebra: 6, history: 7, physics: 8 },
 *   { algebra: 5, history: 9, physics: 7 },
 *   { algebra: 7, history: 6, physics: 9 }
 * );
 * // "I need to buy a bicycle for my third son."
 */
function whoseBicycle(...args) {
  let bestSon = "first";
  let score = 0;
  let curSon = "first";
  for (const son of args) {
    let curScore = 0;
    for (const key in son) {
      curScore += son[key];
    }
    if (curScore >= score) {
      score = curScore;
      bestSon = curSon;
    }
    curSon = curSon === "first" ? "second" : "third";
  }
  return `I need to buy a bicycle for my ${bestSon} son.`;
}
