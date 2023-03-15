/* 7 kyu
How many arguments

https://www.codewars.com/kata/5c44b0b200ce187106452139/javascript

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

const args_count = (...args) => args.length;