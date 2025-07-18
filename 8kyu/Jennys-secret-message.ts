/* 8 kyu
Jenny's secret message

https://www.codewars.com/kata/55225023e1be1ec8bc000390/typescript

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

export function greet(name: string): string {
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}
