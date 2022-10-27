/* 7 kyu
No oddities here

https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/javascript

DESCRIPTION:
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(values) {
    return values.slice().filter(e => e % 2 === 0)
}

// Found out later that filter already returns a shadow copy