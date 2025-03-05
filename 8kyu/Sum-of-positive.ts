/* 8 kyu
Sum of positive

https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript

You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1 + 7 + 12 = 20

Note
If there is nothing to sum, the sum is default to 0.
*/

export function positiveSum(arr: number[]): number {
  let result = 0;
  for (const each of arr) {
    if (each > 0) result += each;
  }
  return result;
}
