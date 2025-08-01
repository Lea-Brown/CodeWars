/* 7 kyu
Odd or Even?

https://www.codewars.com/kata/5949481f86420f59480000e7/typescript

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

export function oddOrEven(array: number[]) {
  return array.reduce((acc, add) => acc + add, 0) % 2 === 0 ? "even" : "odd";
}
