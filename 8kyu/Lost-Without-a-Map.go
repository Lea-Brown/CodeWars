/* 8 kyu
Beginner - Lost Without a Map

https://www.codewars.com/kata/57f781872e3d8ca2a000007e/go

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

package kata

func Maps(x []int) []int {
	arr := make([]int, len(x))
	copy(arr, x)

	for i := 0; i < len(arr); i++ {
		arr[i] *= 2
	}
	return arr
}
