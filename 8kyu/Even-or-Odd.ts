/* 8 kyu
Even or Odd

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/typescript

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

export function evenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}
