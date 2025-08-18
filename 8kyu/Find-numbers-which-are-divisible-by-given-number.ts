/* 8 kyu
Find numbers which are divisible by given number

https://www.codewars.com/kata/55edaba99da3a9c84000003b/typescript

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

export function divisibleBy(numbers: number[], divisor: number): number[] {
  let result: number[] = [];
  for (const each of numbers) {
    if (each % divisor === 0) result.push(each);
  }
  return result;
}
