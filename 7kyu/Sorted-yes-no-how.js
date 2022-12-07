/* 7 kyu
Sorted? yes? no? how?

https://www.codewars.com/kata/580a4734d6df748060000045/javascript

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let a = JSON.stringify(array)
    let ascending = JSON.stringify(array.slice().sort((a, b) => a - b))
    let descending = JSON.stringify(array.slice().sort((a, b) => b - a))

    if (a === ascending) return 'yes, ascending'
    if (a === descending) return 'yes, descending'
    return 'no'
}