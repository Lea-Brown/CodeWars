/* 8 kyu
String repeat

https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript

Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

export function repeatStr(n: number, s: string): string {
  let result: string[] = [];
  for (let i = 0; i < n; i++) {
    result.push(s);
  }
  return result.join("");
}
