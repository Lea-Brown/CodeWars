/* 6 kyu
Sums of Parts

https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Notes
Take a look at performance: some lists have thousands of elements.
*/

function partsSums(ls) {
	if (ls.length === 0) return [0]; // Check if the input array is empty, return [0] if true

	let result = []; // Initialize an empty array to store the partial sums
	let count = ls.reduce((acc, add) => acc + add); // Calculate the sum of all elements in the array

	for (let i = 0; i < ls.length; i++) {
		result.push(count); // Add the current sum to the result array
		count -= ls[i]; // Subtract the current element from the sum for the next iteration
	}

	result.push(0); // Add 0 as the last element to account for the sum of all elements
	return result; // Return the array of partial sums
}
