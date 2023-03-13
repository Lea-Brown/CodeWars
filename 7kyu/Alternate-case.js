/* 7 kyu
Alternate case

https://www.codewars.com/kata/57a62154cf1fa5b25200031e/javascript

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

const alternateCase = s => [...s].map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');