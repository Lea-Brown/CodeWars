/* 8 kyu
Remove duplicates from list

https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/javascript

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

const distinct = a => [...new Set(a)];