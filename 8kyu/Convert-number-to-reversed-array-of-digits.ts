/* 8 kyu
Convert number to reversed array of digits

https://www.codewars.com/kata/5583090cbe83f4fd8c000051/typescript
 
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

export const digitize = (n: number): number[] => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((each) => +each);
};
