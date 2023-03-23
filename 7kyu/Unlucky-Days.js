/* 7 kyu
Unlucky Days

https://www.codewars.com/kata/56eb0be52caf798c630013c0/javascript

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
    let d = new Date(`01.01.${year}`);
    if (year % 4 === 0) {
        if (d.getDay() == 1 || d.getDay() == 3 || d.getDay() == 4) return 2;
        if (d.getDay() == 2 || d.getDay() == 5 || d.getDay() == 6) return 1;
        if (d.getDay() == 0) return 3;
    } else {
        if (d.getDay() == 0 || d.getDay() == 1 || d.getDay() == 2) return 2;
        if (d.getDay() == 3 || d.getDay() == 5 || d.getDay() == 6) return 1;
        if (d.getDay() == 4) return 3;
    }
}