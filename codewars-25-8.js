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