/* 6 kyu
Find The Parity Outlier

https://www.codewars.com/kata/5526fc09a1bbd946250002dc/typescript

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

export function findOutlier(integers: number[]): number {
  let even: number = 0;
  let odd: number = 0;
  let lastEven: number = 0;
  let lastOdd: number = 0;
  for (const each of integers) {
    if (each % 2 === 0) {
      even++;
      lastEven = each;
    } else {
      odd++;
      lastOdd = each;
    }
    if (even > 1 && odd === 1) return lastOdd;
    if (odd > 1 && even === 1) return lastEven;
  }
  return -1;
}
