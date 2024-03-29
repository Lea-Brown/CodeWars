/* 7 kyu
Greet Me

https://www.codewars.com/kata/535474308bb336c9980006f2/javascript

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function (name) {
    return `Hello ${[name].map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())}!`
};