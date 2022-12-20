/* 7 kyu
Build a square

https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/javascript

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(integer) {
    let count = 0;
    let result = [];
    while (count < integer) {
        result.push(`${Array(integer).fill('+').join('')}`)
        count++
    }
    return result.join('\n')
}