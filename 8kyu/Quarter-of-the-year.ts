/* 8 kyu
Quarter of the year

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/typescript

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:
1 <= month <= 12
*/

export function quarterOf(month: number): number {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}
