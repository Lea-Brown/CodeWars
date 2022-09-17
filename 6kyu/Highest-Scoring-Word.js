/*6 kyu
Highest Scoring Word

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let result;
    let score = 0;

    x.split(' ').forEach(word => {
        let count = 0;
        word.split('').forEach(letter => {
            count += alph.indexOf(letter) + 1;
        })
        if (count > score) {
            score = count;
            result = word;
        }
    })

    return result
}