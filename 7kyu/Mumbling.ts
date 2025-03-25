/* 7 kyu
Mumbling

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export function accum(s: string): string {
  let result: any[] = [];
  for (let i = 0; i < s.length; i++) {
    const newArr = Array(i + 1).fill(s[i].toLowerCase());
    newArr[0] = s[i].toUpperCase();
    result.push(newArr.join(""));
  }
  return result.join("-");
}
