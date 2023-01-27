/* 7 kyu
Largest Square Inside A Circle

https://www.codewars.com/kata/5887a6fe0cfe64850800161c/javascript

Determine the area of the largest square that can fit inside a circle with radius r.
*/

const areaLargestSquare = r => Math.round((r * 2 / Math.sqrt(2)) ** 2)