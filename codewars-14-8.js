/* Testing 1-2-3 7kyu

https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
    let newArr = [];
    for (let i = 1; i <= array.length; i++) {
        newArr.push(`${i}: ${array[i - 1]}`)
    }
    return newArr;
}

/* Moving Zeros To The End 5kyu

https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    let newArr = arr.filter(x => x !== 0)
    let zeros = arr.filter(x => x === 0)
    return newArr.concat(zeros)
}