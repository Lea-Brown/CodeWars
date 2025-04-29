/* 6 kyu
Multiplication table

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/typescript

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:
1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]v
*/

export function multiplicationTable(size: number): number[][] {
  let result: number[][] = [];
  for (let a = 0; a < size; a++) {
    const arr = Array.from({ length: size }, (_, i) => (i + 1) * (a + 1));
    result.push(arr);
  }
  return result;
}
