/* 6kyu
Count characters in your string 

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