/* 6 kyu
Write Number in Expanded Form

https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let numSplit = num.toString().split('');
    let overZero = [];
    for (let i = 0; i < numSplit.length; i++) {
        if (numSplit[i] > 0) {
            overZero.push(numSplit[i].padEnd(numSplit.length - i, 0))
        }
    } return overZero.join(' + ')
}