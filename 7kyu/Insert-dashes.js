/* 7 kyu
Insert dashes

https://www.codewars.com/kata/55960bbb182094bc4800007b/javascript

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
	const result = [...num.toString()]
		.map((e, i) => (+e % 2 != 0 && +[...num.toString()][i + 1] % 2 != 0 ? `${e}-` : e))
		.join('');
	return result[result.length - 1] == '-' ? result.slice(0, result.length - 1) : result;
}
