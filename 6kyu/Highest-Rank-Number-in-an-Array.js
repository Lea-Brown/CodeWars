/* 6 kyu
Highest Rank Number in an Array

https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
    let count = 0, result = 0;
    new Set(arr).forEach(e => {
        let test = arr.filter(i => i === e).length;
        if (test > count || test === count && e > result) {
            result = e;
            count = test;
        }
    });
    return result;
}