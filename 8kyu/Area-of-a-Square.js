/* 8 kyu
Area of a Square

https://www.codewars.com/kata/5748838ce2fab90b86001b1a/javascript

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

const squareArea = A => ((A * 4) / (2 * Math.PI)) ** 2;
