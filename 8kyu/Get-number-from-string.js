/* 8 kyu
Get number from string

https://www.codewars.com/kata/57a37f3cbb99449513000cd8/javascript

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

function getNumberFromString(s) {
  return +[...s]
    .map(e => {
      if ('1234567890'.includes(e)) return e;
    })
    .join('');
}
