/* 7 kyu
noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items

https://www.codewars.com/kata/57475353facb0e7431000651

Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

The order of the elements in the result should follow what appears in the first array, then the second one.

Examples
[1, 2, 3, 3], [3, 2, 1, 4, 5]) --> [4, 5]

["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

[77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

[1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

[1, 2, 3] , [3, 3, 2, 1] --> []
*/

function hotSingles(arr1, arr2) {
  let result = [];
  arr1.forEach(e => {
    if (!arr2.includes(e)) result.push(e);
  });
  arr2.forEach(e => {
    if (!arr1.includes(e)) result.push(e);
  });
  return [...new Set(result)];
}
