/* 7 kyu
Return String of First Characters

https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/javascript

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

function makeString(s) {
  let result = [];
  s.split(' ').forEach(e => result.push(e[0]));
  return result.join('');
}

// chatGBT refractored

const makeString = s =>
  s
    .split(' ')
    .map(e => e[0])
    .join('');
