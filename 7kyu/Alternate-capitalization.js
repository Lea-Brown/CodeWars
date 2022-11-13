/* 7 kyu
Alternate capitalization

https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s) {
    let cap1 = s.split('').map((e, i) => {
        if (i % 2 == 0) {
            return e.toUpperCase()
        } else {
            return e
        }
    }).join('')

    let cap2 = s.split('').map((e, i) => {
        if (i % 2 != 0) {
            return e.toUpperCase()
        } else {
            return e
        }
    }).join('')

    return [cap1, cap2]
};

// only using one loop

function capitalize(s) {
    let even = ''
    let odd = ''
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            even += s[i].toUpperCase()
            odd += s[i]
        } else {
            odd += s[i].toUpperCase()
            even += s[i]
        }
    }
    return [even, odd]
};