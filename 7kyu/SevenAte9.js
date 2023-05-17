/* 7 kyu
SevenAte9

https://www.codewars.com/kata/559f44187fa851efad000087/javascript

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
	return [...str]
		.map((e, i) => {
			return e === '9' && str[i - 1] === '7' && str[i + 1] === '7' ? '' : e;
		})
		.join('');
}
