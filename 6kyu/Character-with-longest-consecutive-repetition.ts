/* 6 kyu
Character with longest consecutive repetition

https://www.codewars.com/kata/586d6cefbcc21eed7a001155/typescript

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]: [string, number]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/

export function longestRepetition(text: string): [string, number] {
  if (text.length === 0) return ["", 0];
  let maxChar = text[0],
    maxCount = 1;
  let currentChar = text[0],
    currentCount = 1;
  for (let i = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = text[i];
      currentCount = 1;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
  }
  return [maxChar, maxCount];
}
