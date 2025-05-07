/* 6 kyu
Backspaces in string

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/typescript

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

export function cleanString(s: string): string {
  let result: string[] = [];
  for (const each of s) {
    each === "#" ? result.pop() : result.push(each);
  }
  return result.join("");
}
