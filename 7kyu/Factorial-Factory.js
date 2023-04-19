/* 7 kyu
Factorial Factory

https://www.codewars.com/kata/528e95af53dcdb40b5000171/javascript

In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null;

For more on Factorials : http://en.wikipedia.org/wiki/Factorial
*/

function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n -= 1;
  }
  return n < 0 ? null : result;
}
