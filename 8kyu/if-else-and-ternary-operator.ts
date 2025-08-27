/* 8 kyu
Training JS #7: if..else and ternary operator

https://www.codewars.com/kata/57202aefe8d6c514300001fd/typescript
*/

export function saleHotdogs(n: number): number {
  return n * (n < 5 ? 100 : n >= 10 ? 90 : 95);
}
