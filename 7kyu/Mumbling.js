/* 7kyu
Mumbling

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    let newStr = "";
    s.split('')
    for (let i = 0; i < s.length; i++) {
        newStr += `${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}-`
    }
    return newStr.slice(0, -1);
}