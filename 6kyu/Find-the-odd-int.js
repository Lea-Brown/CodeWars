/* 6kyu Find the odd int 

Googled ways to find odd elements in array and stumbled on this solution. I don't really understand it. At the moment anyway.

https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript 
*/

function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}
