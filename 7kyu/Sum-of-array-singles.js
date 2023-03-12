/* 7 kyu
Sum of array singles

https://www.codewars.com/kata/59f11118a5e129e591000134/javascript

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/

function repeats(arr) {
    let result = [];
    let set = [...new Set(arr)];
    set.forEach(e => {
        if (arr.filter(x => x == e).length === 1) result.push(e);
    })
    return result.reduce((a, b) => a + b);
};