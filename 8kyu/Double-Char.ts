/* 8 kyu
Double Char

https://www.codewars.com/kata/56b1f01c247c01db92000076/typescript

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

export function doubleChar(str: string): string {
  let result: string[] = [];
  for (const each of str) {
    result.push(each);
    result.push(each);
  }
  return result.join("");
}
