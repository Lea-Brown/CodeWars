/* 8 kyu
Fake Binary

https://www.codewars.com/kata/57eae65a4321032ce000002d/typescript

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

export function fakeBin(x: string): string {
  let result: string[] = [];
  for (const each of x) {
    +each < 5 ? result.push("0") : result.push("1");
  }
  return result.join("");
}
