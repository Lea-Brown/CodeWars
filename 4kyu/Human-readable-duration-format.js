/* 4 kyu
Human readable duration format

https://www.codewars.com/kata/52742f58faf5485cae000b9a

DESCRIPTION:
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration(seconds) {
  let years = Math.floor(seconds / 60 / 60 / 24 / 354);
  let days = Math.floor(seconds / 60 / 60 / 24);
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  let trueSeconds = seconds % 60;

  let arr = [];

  if (years > 1) {
    arr.push(`${years} years`);
  } else if (years == 1) {
    arr.push(`${years} year`);
  }

  if (days % 365 == 1) {
    arr.push(`1 day`);
  } else if (days % 365 > 1) {
    arr.push(`${days % 365} days`);
  }

  if (hours % 24 == 1) {
    arr.push('1 hour');
  } else if (hours % 24 > 1) {
    arr.push(`${hours % 24} hours`);
  }

  if (minutes > 1) {
    arr.push(`${minutes} minutes`);
  } else if (minutes == 1) {
    arr.push(`${minutes} minute`);
  }

  if (trueSeconds > 1) {
    arr.push(`${trueSeconds} seconds`);
  } else if (trueSeconds == 1) {
    arr.push(`${trueSeconds} second`);
  }

  if (arr.length == 0) {
    return 'now';
  } else if (arr.length == 1) {
    return arr[0];
  } else if (arr.length == 2) {
    return arr.join(' and ');
  } else {
    let group = arr.slice(0, arr.length - 1);
    let last = arr.slice(-1);
    return group.join(', ') + ' and ' + last[0];
  }
}
