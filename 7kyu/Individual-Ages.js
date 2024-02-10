/* 7 kyu
Calculate Two People's Individual Ages

https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/javascript

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum, diff) {
  if (sum < 0 || diff < 0 || sum < diff) return null;
  return [(sum - diff) / 2 + diff, (sum - diff) / 2];
}
