/* 7 kyu
Sum even numbers

https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/javascript

Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/

const sumEvenNumbers = input => input.filter(e => e % 2 === 0).reduce((a,b) => a + b,0);