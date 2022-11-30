/* 6 kyu
Character with longest consecutive repetition

https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/

function longestRepetition(s) {
    let letter = '';
    let count = 0;
    let currentLetter = [];

    function update(e) {
        if (currentLetter.length > count) {
            letter = currentLetter[0];
            count = currentLetter.length;
        }
    }

    [...s].forEach(e => {
        if (e == currentLetter[0]) {
            currentLetter.push(e);
            update(e);
        } else {
            update(e);
            currentLetter = [];
            currentLetter.push(e);
            update(e);
        }
    })

    return [letter, count];
}