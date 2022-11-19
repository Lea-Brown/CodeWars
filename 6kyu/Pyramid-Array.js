/* 6 kyu
Pyramid Array

https://www.codewars.com/kata/515f51d438015969f7000013/javascript

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        let add = []
        for (let x = 0; x < i; x++) {
            add.push(1)
        }
        result.push(add)
    }
    return result
}