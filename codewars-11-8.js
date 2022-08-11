/* Convert string to camel case 6kyu

https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
    let newStr = ''
    str.replace(/[^a-zA-Z]/g, " ").split(' ').forEach((x, i) => {
        if (i === 0) {
            newStr = x
        } else {
            newStr += x.replace(x[0], x[0].toUpperCase())
        }
    })
    return newStr;
}