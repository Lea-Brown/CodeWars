/* 8 kyu
Training JS #9: loop statement --while and do..while

https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript

Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
*/

function padIt(str, n) {
  let padStart = [];
  let padEnd = [];

  while (padStart.length + padEnd.length < n) {
    padStart.push('*');
    if (padStart.length + padEnd.length < n) padEnd.push('*');
  }

  return `${padStart.join('')}${str}${padEnd.join('')}`;
}
