/* 6 kyu
Length of missing array

https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/javascript

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) return 0;
  const sorted = arrayOfArrays.sort((a, b) => a.length - b.length);
  if(sorted[0].length === 0) return 0;
  let count = sorted[0].length;
  for (let i = 0; i < sorted.length; i++) {
    if (!sorted[i] || sorted[i].length !== count) {
      return count;
    }
    count++;
  }
  return count;
}