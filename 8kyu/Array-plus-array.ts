/* 8 kyu
Array plus array

https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/typescript

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return (
    arr1.reduce((acc, add) => acc + add, 0) +
    arr2.reduce((acc, add) => acc + add, 0)
  );
};
