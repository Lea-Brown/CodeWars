/* Array.diff 6kyu

https://www.codewars.com/kata/523f5d21c841566fde000009/javascript 
*/

function arrayDiff(a, b) {
  return a.filter((x) => (b.indexOf(x) > -1 ? false : true));
}
