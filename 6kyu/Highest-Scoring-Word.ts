/* 6 kyu
Highest Scoring Word

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/typescript

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

export const high = (str: string): string => {
  let result: string = "";
  let biggestScore: number = 0;
  str.split(" ").forEach((word) => {
    let currScore: number = 0;
    for (const each of word) {
      currScore += each.charCodeAt(0) - 96;
    }
    if (currScore > biggestScore) {
      result = word;
      biggestScore = currScore;
    }
  });
  return result;
};
