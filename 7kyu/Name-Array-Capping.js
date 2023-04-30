/* 7 kyu
Name Array Capping

https://www.codewars.com/kata/5356ad2cbb858025d800111d/javascript

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

const capMe = names => names.map(e => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase());
