/* 8 kyu
Sum of differences in array

https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/javascript

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/

function sumOfDifferences(arr) {
  return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}
