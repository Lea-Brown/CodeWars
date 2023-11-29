/* 8 kyu
Is the date today

https://www.codewars.com/kata/563c13853b07a8f17c000022/javascript

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

const isToday = date =>
  date.toISOString().split('T')[0] == new Date().toISOString().split('T')[0];
