/* 8 kyu
Square(n) Sum

https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, add) => acc + add ** 2, 0);
}
