/* Count characters in your string 6kyu

https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    let result = {};
    let unique = string.split('').filter((v, i, a) => a.indexOf(v) == i)
    unique.forEach(x => {
        result[x] = string.split('').filter(letter => letter === x).length
    })
    return result;
}

/* Mumbling 7kyu

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