/* 7 kyu
Fix string case

https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

function solve(s) {
    let upper = s.split('').filter(e => e === e.toUpperCase())
    let lower = s.split('').filter(e => e === e.toLowerCase())
    return upper.length > lower.length ? s.toUpperCase() : s.toLowerCase()
}