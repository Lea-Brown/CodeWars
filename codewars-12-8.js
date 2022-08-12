// Doign array ladder 8 7 6 kyu 

/*
Convert number to reversed array of digits 8kyu

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

/* Sort array by string length 7kyu

https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/javascript

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
};

/* Array Helpers 6kyu

https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function () {
    return this.map((x) => Math.pow(x, 2));
}
Array.prototype.cube = function () {
    return this.map((x) => Math.pow(x, 3));
}
Array.prototype.sum = function () {
    let sum = this.reduce((a, b) => a + b, 0);
    return sum;
}
Array.prototype.average = function () {
    let sum = this.reduce((a, b) => a + b, 0);
    return sum / this.length;
}
Array.prototype.even = function () {
    return this.filter(x => x % 2 === 0)
}
Array.prototype.odd = function () {
    return this.filter(x => x % 2 === 1)
}