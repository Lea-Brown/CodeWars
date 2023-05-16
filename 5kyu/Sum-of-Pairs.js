/* 5 kyu
Sum of Pairs

https://www.codewars.com/kata/54d81488b981293527000c8f/javascript

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

function sumPairs(ints, s) {
	let cut = ints.length - 1;
	let indexCheck;
	let result;

	for (let i = 0; i < ints.length - 1; i++) {
		if (ints[i] != ints[i - 1]) {
			let check = [...new Set(ints.slice(-cut))];
			let myIndex = check.findIndex(e => e + ints[i] === s);

			if (i > indexCheck) return result;

			if (ints[i] + check[myIndex] === s && indexCheck == null) {
				indexCheck = myIndex;
				result = [ints[i], check[myIndex]];
			}

			if (ints[i] + check[myIndex] === s && myIndex < indexCheck) {
				result = [ints[i], check[myIndex]];
			}
		}

		cut--;
	}

	return result || undefined;
}

// Too slow

function sumPairs(ints, s) {
	let cut = ints.length - 1;
	let indexCheck;
	let result;

	for (let i = 0; i < ints.length - 1; i++) {
		let check = ints.slice(-cut);
		for (let a = 0; a < check.length; a++) {
			if (ints[i] + check[a] === s && indexCheck == null) {
				indexCheck = a;
				result = [ints[i], check[a]];
			}

			if (ints[i] + check[a] === s && a < indexCheck) {
				result = [ints[i], check[a]];
			}
		}
		cut--;
	}

	return result || undefined;
}
