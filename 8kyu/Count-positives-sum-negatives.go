/* 8 kyu
Count of positives / sum of negatives

https://www.codewars.com/kata/576bb71bbbcf0951d5000044/go

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

package kata

func CountPositivesSumNegatives(numbers []int) []int {
	countPositives := 0
	sumNegatives := 0

	for _, num := range numbers {
		if num > 0 {
			countPositives++
		} else if num < 0 {
			sumNegatives += num
		}
	}

	return []int{countPositives, sumNegatives}
}
