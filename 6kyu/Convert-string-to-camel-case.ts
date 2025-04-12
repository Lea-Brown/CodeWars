/* 6 kyu
Convert string to camel case

https://www.codewars.com/kata/517abf86da9663f1d2000003/typescript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

export function toCamelCase(str: string): string {
  let resultArr: string[] = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      resultArr.push(str[i + 1].toUpperCase());
      i++;
    } else {
      resultArr.push(str[i].toLowerCase());
    }
  }
  return resultArr.join("");
}
