/* 6 kyu
Find the unique number

https://www.codewars.com/kata/585d7d5adb20cf33cb000235/typescript

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

export function findUniq(arr: number[]): number {
  const obj: { [key: string]: number } = {};
  for (const each of arr) {
    obj[each] = (obj[each] || 0) + 1;
  }
  for (const each in obj) {
    if (obj[each] === 1) return +each;
  }
  return -1;
}
