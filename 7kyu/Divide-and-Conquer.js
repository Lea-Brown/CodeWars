/* 7 kyu
Divide and Conquer

https://www.codewars.com/kata/57eaec5608fed543d6000021/javascript

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(x) {
    let f = x
        .filter(e => typeof e === 'number')
        .reduce((a, b) => a + b, 0) || 0;
    let s = x
        .filter(e => typeof e === 'string')
        .map(Number)
        .reduce((a, b) => a + b, 0) || 0;
    return f - s
}