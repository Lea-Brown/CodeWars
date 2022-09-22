/* 8kyu
Convert number to reversed array of digits 

https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    return n.toString().split('').map(n => +n).reverse();
}