/* 8 kyu
Powers of 2

https://www.codewars.com/kata/57a083a57cb1f31db7000028/typescript

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

export function powersOfTwo(n: number): number[] {
  let result: number[] = [1];
  for (let i = 1; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
