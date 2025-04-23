/* 7 kyu
Shortest Word

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/typescript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

export function findShort(s: string): number {
  const arr = s.split(" ");
  let result = arr[0].length;
  for (const each of arr) {
    if (each.length < result) result = each.length;
  }
  return result;
}
