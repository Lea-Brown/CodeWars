/* 6 kyu
IP Validation

https://www.codewars.com/kata/515decfd9dcfc23bb6000006/javascript

DESCRIPTION:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) {
    if (str == '0.0.0.0') return true;
    if (str.trim() != str) return false;
    let check = str.split('.');
    if (check.length != 4) return false;
    for (let i = 0; i < 4; i++) {
        if (check[i].length < 1) return false;
        if (check[i].trim() != check[i]) return false;
        if (check[i].toUpperCase() != check[i].toLowerCase()) return false;
        if (Number(check[i]) < 0 || Number(check[i]) > 255) return false;
        if (check[i][0] == '0' && typeof check[i][1] == 'string') return false;
    }
    return true;
}