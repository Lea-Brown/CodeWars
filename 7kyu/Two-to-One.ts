/* 7 kyu
Two to One

https://www.codewars.com/kata/5656b6906de340bd1b0000ac/typescript

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

export const longest = (s1: string, s2: string): string => {
  return [...new Set(s1 + s2)].sort().join("");
};
