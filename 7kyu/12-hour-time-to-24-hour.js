/* 7 kyu
Converting 12-hour time to 24-hour time

https://www.codewars.com/kata/59b0a6da44a4b7080300008a/javascript

Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.

Notes
By convention, noon is 12:00 pm, and midnight is 12:00 am.
On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.
*/

function to24hourtime(hour, minute, period) {
  if (hour === 12 && period === 'pm')
    return `${'12'}${minute.toString().padStart(2, '0')}`;
  if (hour === 12 && period === 'am')
    return `${'00'}${minute.toString().padStart(2, '0')}`;
  if (period === 'am')
    return `${hour.toString().padStart(2, 0)}${minute
      .toString()
      .padStart(2, '0')}`;
  return `${(hour + 12).toString().padStart(2, 0)}${minute
    .toString()
    .padStart(2, '0')}`;
}
