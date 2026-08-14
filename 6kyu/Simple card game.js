/**
 * 6 kyu
 * Simple card game
 * https://www.codewars.com/kata/53417de006654f4171000587/javascript
 *
 * Compares two decks of playing cards, card by card, and determines the winner.
 *
 * The decks are compared index by index. A higher-ranked card wins that round.
 * The player who wins the most rounds wins the game.
 *
 * Card ranking (low to high): 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A.
 *
 * @param {string[]} deckSteve - Steve's deck of card ranks (e.g. ['2', 'K', 'A']).
 * @param {string[]} deckJosh - Josh's deck of card ranks. Must be the same length as deckSteve.
 * @returns {string} A result message naming the winner and the score, or "Tie" if the scores are equal.
 *
 * @example
 * // Steve wins both rounds
 * winner(['A', 'K'], ['2', '3']);
 * // => 'Steve wins 2 to 0'
 *
 * @example
 * // Josh wins the majority of rounds
 * winner(['2', '3', '4'], ['A', 'K', '3']);
 * // => 'Josh wins 2 to 1'
 *
 * @example
 * // Equal rounds won results in a tie
 * winner(['A', '2'], ['2', 'A']);
 * // => 'Tie'
 */
function winner(deckSteve, deckJosh) {
  const cards = {
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    T: 9,
    J: 10,
    Q: 11,
    K: 12,
    A: 13,
  };
  let score = [0, 0];
  for (let i = 0; i < deckSteve.length; i++) {
    if (cards[deckSteve[i]] > cards[deckJosh[i]]) score[0]++;
    if (cards[deckSteve[i]] < cards[deckJosh[i]]) score[1]++;
  }
  if (score[0] > score[1]) {
    return `Steve wins ${score[0]} to ${score[1]}`;
  } else if (score[0] < score[1]) {
    return `Josh wins ${score[1]} to ${score[0]}`;
  } else {
    return "Tie";
  }
}

//optimised version
const cards = {
  //object not getting built everytime
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
};
function winner(deckSteve, deckJosh) {
  let score = [0, 0];
  for (let i = 0; i < deckSteve.length; i++) {
    const s = cards[deckSteve[i]]; // not looking up the card values multiple times
    const j = cards[deckJosh[i]];
    if (s > j) score[0]++;
    if (s < j) score[1]++;
  }
  if (score[0] > score[1]) {
    return `Steve wins ${score[0]} to ${score[1]}`;
  } else if (score[0] < score[1]) {
    return `Josh wins ${score[1]} to ${score[0]}`;
  } else {
    return "Tie";
  }
}
