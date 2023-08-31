/* 8 kyu
Geometry Basics: Distance between points in 2D

https://www.codewars.com/kata/58dced7b702b805b200000be/javascript

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Tests compare expected result and actual answer with tolerance of 1e-6.
*/

function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
