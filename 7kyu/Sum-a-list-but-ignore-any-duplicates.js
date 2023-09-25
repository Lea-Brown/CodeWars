/* 7 kyu
Sum a list but ignore any duplicates

https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/javascript

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  let toSum = [];
  numList
    .sort((a, b) => a - b)
    .forEach((e, i) => {
      if (e != numList[i + 1] && e != numList[i - 1]) toSum.push(e);
    });
  return toSum.reduce((acc, add) => acc + add, 0);
}
