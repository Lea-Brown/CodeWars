/* 8 kyu
Simple validation of a username with regex

https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/javascript

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
  const reg = /^[a-z0-9_]{4,16}$/;
  return reg.test(username);
}
