/* 8 kyu
Exclamation marks series #1: Remove an exclamation mark from the end of string

https://www.codewars.com/kata/57fae964d80daa229d000126/typescript

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

export function remove(s: string): string {
  return s[s.length - 1] === "!" ? s.slice(0, -1) : s;
}
