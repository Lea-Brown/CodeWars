/* 7 kyu
Strict Mode

https://www.codewars.com/kata/639918bef003910b2146d0b8/javascript

Write a function that returns whether it is running in strict mode.
*/

function isInStrictMode() {
  return (
    (function () {
      return !this;
    })() === true
  );
}
