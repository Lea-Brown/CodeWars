/* 8 kyu
Regex count lowercase letters

https://www.codewars.com/kata/56a946cd7bd95ccab2000055/javascript

Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

const lowercaseCount = str => str.replace(/[^a-z]/g, '').length;
