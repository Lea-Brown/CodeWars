/* 6kyu
Replace With Alphabet Position

https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript 
*/

function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newStr = '';
    text.toLowerCase().split('').forEach(x => {
        if (alphabet.indexOf(x) + 1 > 0) {
            newStr += alphabet.indexOf(x) + 1 + ' ';
        }
    })
    return newStr.trim();
}