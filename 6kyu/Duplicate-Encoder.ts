/* 6 kyu
Duplicate Encoder

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/typescript

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

export function duplicateEncode(word: string) {
  word = word.toLowerCase();
  let obj: { [key: string]: number } = {};
  for (const each of word) {
    obj[each] = (obj[each] || 0) + 1;
  }
  let newString: string[] = [];
  for (const each of word) {
    obj[each] > 1 ? newString.push(")") : newString.push("(");
  }
  return newString.join("");
}
