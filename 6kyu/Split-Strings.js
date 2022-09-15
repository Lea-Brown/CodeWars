/* 6 kyu
Split Strings

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
    let result = [];
    let arr = str.split('');

    if (str.split('').length % 2 !== 0) {
        arr.push('_');
    }

    while (arr.length > 0) {
        result.push(arr.splice(0, 2).join(''));
    }

    return result;
}