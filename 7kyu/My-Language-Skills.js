/* 7 kyu
My Language Skills

https://www.codewars.com/kata/5b16490986b6d336c900007d/javascript

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

function myLanguages(results) {
    let arr = [];
    for (let x in results) { arr.push([x, results[x]]) };
    arr.sort((a, b) => b[1] - a[1]);
    let valid = arr.filter(([key, value]) => value >= 60);
    return valid.map(e => e[0]);
}

function myLanguages(results) {
    return Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .filter(([key, value]) => value >= 60)
        .map(e => e[0]);
}