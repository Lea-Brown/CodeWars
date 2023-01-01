/* 6 kyu
Reverse every other word in the string

https://www.codewars.com/kata/58d76854024c72c3e20000de/javascript

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str) {
    return str.split(' ').map((e, i) => {
        if (i % 2 === 0) return e
        return e.split('').reverse().join('')
    }).join(' ').trim()
}

function reverse(str) {
    return str.split(' ').map((e, i) => i % 2 === 0 ? e : e.split('').reverse().join('')).join(' ').trim()
}