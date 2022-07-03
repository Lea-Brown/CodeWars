// My daily Codewars answers. Newest first.

// Counting sheep... 8kyu
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present)
function countSheeps(arrayOfSheep) {
    let totalSheep = 0;
    arrayOfSheep.forEach(sheep => sheep ? totalSheep++ : 0)
    return totalSheep;
}

// Summation 8kyu
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
let summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}