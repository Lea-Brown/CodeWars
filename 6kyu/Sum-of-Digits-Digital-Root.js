/* 6kyu
Sum of Digits / Digital Root 

https://www.codewars.com/kata/541c8630095125aba6000c00/javascript 
*/

function digital_root(n) {
    return (n - 1) % 9 + 1;
}