/* 8 kyu
Find the smallest integer in the array

https://www.codewars.com/kata/55a2d7ebe362935a210000b2/go

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

package kata

func SmallestIntegerFinder(numbers []int) int {
	result := numbers[0]
	for _, val := range numbers {
		if val < result {
			result = val
		}
	}
	return result
}

package kata
import "sort"

func SmallestIntegerFinder(numbers []int) int {
	sort.Ints(numbers)
	return numbers[0]
}