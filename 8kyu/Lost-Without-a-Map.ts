/* 8 kyu
Beginner - Lost Without a Map

https://www.codewars.com/kata/57f781872e3d8ca2a000007e/typescript

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

export function maps(x: number[]): number[] {
  return x.map((e) => e * 2);
}
