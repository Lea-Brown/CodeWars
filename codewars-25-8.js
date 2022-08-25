/* 8 kyu Remove exclamation marks

https://www.codewars.com/kata/57a0885cbb9944e24c00008e/javascript

DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
    // Trying to code without regex
    // return s.replace(/!/g, '');
    let result = [];
    s.split('').forEach(x => {
        if (x != '!') {
            result.push(x)
        }
    })
    return result.join('');
}

/* 8 kyu
Quarter of the year

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/javascript

DESCRIPTION:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
            return 1;
        case 4:
        case 5:
        case 6:
            return 2;
        case 7:
        case 8:
        case 9:
            return 3;
        case 10:
        case 11:
        case 12:
            return 4;
        default:
            return "Not between 1 and 12"
    }
}