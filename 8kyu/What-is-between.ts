/* 8 kyu
What is between?

https://www.codewars.com/kata/55ecd718f46fba02e5000029/typescript

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

export function between(a: number, b: number): number[] {
  let result: number[] = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
