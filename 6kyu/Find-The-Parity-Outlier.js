/* 6kyu
Find The Parity Outlier

https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript 
*/

function findOutlier(integers) {
    let odd = 0;
    let even = 0;
    integers.forEach(x => x % 2 === 0 ? even++ : odd++);
    if (even > odd) {
        return Number(integers.filter(x => x % 2 !== 0))
    } else {
        return Number(integers.filter(x => x % 2 === 0))
    }
}