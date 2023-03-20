/* 7 kyu
Debug Sum of Digits of a Number

https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/javascript

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

function getSumOfDigits(num) {
    let sum = 0;
    [...Math.floor(num).toString()].forEach(e => sum += Number(e));
    return sum;
}