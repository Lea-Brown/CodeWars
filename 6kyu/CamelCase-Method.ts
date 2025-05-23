/* 6 kyu
CamelCase Method

https://www.codewars.com/kata/587731fda577b3d1b0001196/typescript

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

export function camelCase(str: string): string {
  str = str.toLowerCase();
  let resultArr: string[] = [];
  let cap: boolean = true;
  for (const letter of str) {
    if (letter === " ") {
      cap = true;
      continue;
    }
    if (cap) {
      resultArr.push(letter.toUpperCase());
      cap = false;
    } else {
      resultArr.push(letter);
    }
  }
  return resultArr.join("");
}
