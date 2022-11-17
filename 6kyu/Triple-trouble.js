/* 6 kyu
Triple trouble

https://www.codewars.com/kata/55d5434f269c0c3f1b000058/javascript

Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
    let trip = [];
    let double = [];

    for (let i = 0; i < num1.toString().length; i++) {
        let test = num1.toString().slice(i, i + 3)
        if (test.split('').filter(e => e == test[0]).length == 3) trip.push(test)
    }

    for (let i = 0; i < num2.toString().length; i++) {
        let test = num2.toString().slice(i, i + 2)
        if (test.split('').filter(e => e == test[0]).length == 2) double.push(test)
    }

    for (let i = 0; i < trip.length; i++) {
        if (double.includes(trip[i].slice(-2))) return 1
    }
    return 0
}