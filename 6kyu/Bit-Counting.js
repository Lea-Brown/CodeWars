/* 6kyu
Bit Counting

https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript 
*/

var countBits = function (n) {
    let total = 0;
    n.toString(2).split('').forEach(x => total += Number(x));
    return total;
}