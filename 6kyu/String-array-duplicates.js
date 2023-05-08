/* 6 kyu
String array duplicates

https://www.codewars.com/kata/59f08f89a5e129c543000069/javascript

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

function dup(s) {
	return s.map(e => {
		let result = [];
		e.split('').forEach((a, b) => {
			if (a != e[b - 1]) result.push(a);
		});
		return result.join('');
	});
}

// Used Chat gpt to refractor code

function dup(s) {
	return s.map(str => {
		let result = '';
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== str[i - 1]) {
				result += str[i];
			}
		}
		return result;
	});
}
