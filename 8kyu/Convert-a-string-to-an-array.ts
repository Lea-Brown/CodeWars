/* 8 kyu
Convert a string to an array

https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/typescript

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

export function stringToArray(s: string): string[] {
  return s.split(" ");
}
