/* 7 kyu
Get the Middle Character

https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

export function getMiddle(s: string) {
  if (s.length % 2 === 0) {
    const length: number = s.length / 2;
    return [s[length - 1], s[length]].join("");
  }
  return s[Math.round(s.length / 2) - 1];
}
