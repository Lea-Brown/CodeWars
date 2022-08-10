/*
Unique In Order 6kyu
https://www.codewars.com/kata/54e6533c92449cc251001667/javascript
*/

var uniqueInOrder = function (iterable) {
    if (typeof iterable === 'string') {
        return iterable.split('').filter((i, idx) => iterable[idx - 1] !== i)
    } else {
        return iterable.filter((i, idx) => iterable[idx - 1] !== i)
    }
}