/* 8 kyu
Calculate average

https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/typescript

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

export function findAverage(array: number[]): number {
  return array.reduce((acc, add) => acc + add, 0) / array.length || 0;
}
