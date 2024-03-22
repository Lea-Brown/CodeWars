/* 8 kyu
Beginner - Reduce but Grow

https://www.codewars.com/kata/57f780909f7e8e3183000078/go

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

package kata

func Grow(arr []int) int {
	result := 1
	for i := 0; i < len(arr); i++ {
		result *= arr[i]
	}
	return result
}
