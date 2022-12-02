/* 7 kyu
Predict your age!

https://www.codewars.com/kata/5aff237c578a14752d0035ae/javascript

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
*/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let result = 0;
    for (let arg = 0; arg < arguments.length; ++arg) result += arguments[arg] ** 2;
    return ~~(Math.sqrt(result) / 2);
}