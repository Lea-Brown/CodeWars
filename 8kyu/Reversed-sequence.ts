/* 8 kyu
Reversed sequence

https://www.codewars.com/kata/5a00e05cc374cb34d100000d/typescript

Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

export function reverseSeq(n: number): number[] {
  let result: number[] = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
}
