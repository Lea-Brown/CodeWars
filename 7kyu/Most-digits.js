/* 7 kyu
Most digits

https://www.codewars.com/kata/58daa7617332e59593000006/javascript

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
    let result = '';
    array.map(e => e.toString()).forEach(e => {
        if (e.length > result.length) result = e
    })
    return Number(result);
}