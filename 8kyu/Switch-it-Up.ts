/* 8 kyu
Switch it Up!

https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/typescript

When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".

If your language supports it, try using a switch statement.
*/

export function switchItUp(intNumber: number): string {
  return intNumber === 1
    ? "One"
    : intNumber === 2
    ? "Two"
    : intNumber === 3
    ? "Three"
    : intNumber === 4
    ? "Four"
    : intNumber === 5
    ? "Five"
    : intNumber === 6
    ? "Six"
    : intNumber === 7
    ? "Seven"
    : intNumber === 8
    ? "Eight"
    : intNumber === 9
    ? "Nine"
    : "Zero";
}
