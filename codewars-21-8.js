/*Simple Pig Latin 5kyu

https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript

DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


function pigIt(str) {
    let split = str.split(' ');
    let firstLetter = split.map(x => x.split('').shift());
    let body = split.map(x => x.slice(1));
    let array = [];

    for (let i = 0; i < split.length; i++) {
        if (firstLetter[i] === '!' || firstLetter[i] === '?') {
            array.push(firstLetter[i])
        } else {
            array.push(`${body[i]}${firstLetter[i]}ay`)
        }
    }

    return array.join(' ');
}