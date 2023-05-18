/* 7 kyu
Split In Parts

https://www.codewars.com/kata/5650ab06d11d675371000003/javascript

The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

const splitInParts = (s, partLength) => {
	let result = [];
	const arr = [...s];

	while (arr.length > 0) {
		result.push(arr.splice(0, partLength).join(''));
	}

	return result.join(' ');
};
