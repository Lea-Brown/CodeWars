/* 7 kyu
Basic JS - Calculating averages

https://www.codewars.com/kata/529f32794a6db5d32a00071f/javascript

Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/

const Calculator = {
	average: function (...a) {
		return a.length === 0 ? 0 : a.reduce((a, b) => a + b) / a.length;
	},
};
