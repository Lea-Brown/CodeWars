/* 6 kyu
Multiplication table

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
  let result = [];
  for (let i = 1; i <= size; i++) {
    result.push([...Array(size)].map((e, a) => i * (a + 1)));
  }
  return result;
};
