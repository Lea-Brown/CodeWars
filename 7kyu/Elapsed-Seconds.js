/* 7 kyu
Elapsed Seconds

https://www.codewars.com/kata/517b25a48557c200b800000c/javascript

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

const elapsedSeconds = (startDate, endDate) => (endDate.getTime() - startDate.getTime()) / 1000;
