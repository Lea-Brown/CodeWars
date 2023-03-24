/* 7 kyu
16+18=214

https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript
*/

function add(num1, num2) {
    num1 = [...num1.toString()];
    num2 = [...num2.toString()];
    let count = [];
    while (num1.length > 0 || num2.length > 0) {
        count.unshift(+num1.splice(-1) + +num2.splice(-1));
    }
    return +count.join('');
}