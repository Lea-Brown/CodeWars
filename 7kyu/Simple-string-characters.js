/* 7 kyu
Simple string characters

https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/javascript

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

function solve(s) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let num = '1234567890'
    let spec = `,./<>?;#:@~[]{}()!£$%^&*-=_+\\|\`'"*`

    let upperArr = []
    let lowerArr = []
    let numArr = []
    let specArr = []

    s.split('').forEach(e => {
        if (upper.includes(e)) upperArr.push(e)
        if (lower.includes(e)) lowerArr.push(e)
        if (num.includes(e)) numArr.push(e)
        if (spec.includes(e)) specArr.push(e)
    })

    return [upperArr.length, lowerArr.length, numArr.length, specArr.length];
}

function solve(s) {
    let upperArr = []
    let lowerArr = []
    let numArr = []
    let specArr = []

    s.split('').forEach(e => {
        if (e.match(/[A-Z]/g)) upperArr.push(e)
        if (e.match(/[a-z]/g)) lowerArr.push(e)
        if (e.match(/[0-9]/g)) numArr.push(e)
        if (e.match(/[^A-Z0-9]/gi)) specArr.push(e)
    })

    return [upperArr.length, lowerArr.length, numArr.length, specArr.length];
}