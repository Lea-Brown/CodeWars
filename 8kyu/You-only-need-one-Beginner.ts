/* 8 kyu
You only need one - Beginner

https://www.codewars.com/kata/57cc975ed542d3148f00015b/typescript

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

export const check = (a: (number | string)[], x: number | string): boolean =>
  a.includes(x);
