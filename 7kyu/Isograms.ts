/* 7 kyu
Isograms

https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/typescript

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

export function isIsogram(str: string): boolean {
  let obj: any = {};
  const lowercase = str.toLowerCase();
  for (let each of lowercase) {
    if (obj[each]) return false;
    obj[each] = true;
  }
  return true;
}
