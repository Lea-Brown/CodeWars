// My daily Codewars answers. Newest first.

/* Highest and Lowest 7 kyu
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */
function highAndLow(numbers) {
    let sorted = numbers.split(" ").sort((a, b) => a - b);
    return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}

/* Function 1 - hello world 8kyu
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends? */
function greet() {
    let arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
    let hello = "";
    arr.forEach(x => hello += x)
    return hello;
}

/* Counting sheep... 8 kyu
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
function countSheeps(arrayOfSheep) {
    let totalSheep = 0;
    arrayOfSheep.forEach(sheep => sheep ? totalSheep++ : 0)
    return totalSheep;
}

/* Summation 8 kyu
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
let summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}