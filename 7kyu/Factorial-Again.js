/* 7 kyu
Factorial

https://www.codewars.com/kata/57a049e253ba33ac5e000212/javascript

Your task is to write function factorial.
https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n) {
    const factorialNumbers = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000]
    return factorialNumbers[n]
}