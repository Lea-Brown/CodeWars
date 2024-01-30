/* 8 kyu
easy logs

https://www.codewars.com/kata/5b68c7029756802aa2000176/javascript

Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

const logs = (x, a, b) => Math.log(a * b) / Math.log(x);
