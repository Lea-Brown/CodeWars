/* 5 kyu
Not very secure

https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

function alphanumeric(string) {
    let valid = 'abcdefghijklmnopqrstuvwxyz1234567890';
    string = string.toLowerCase().split('');
    for (let i = 0; i < string.length; i++) {
        if (!valid.includes(string[i])) return false;
    }
    return string.length < 1 ? false : true;
}