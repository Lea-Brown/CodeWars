/* 8 kyu
Merging sorted integer arrays (without duplicates)

https://www.codewars.com/kata/573f5c61e7752709df0005d2

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

const mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a, b) => a - b);
