/* 8 kyu
Convert boolean values to strings 'Yes' or 'No'.

https://www.codewars.com/kata/53369039d7ab3ac506000467/typescript

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

export function boolToWord(bool: boolean): string {
  return bool ? "Yes" : "No";
}
