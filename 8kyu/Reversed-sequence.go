/* 8 kyu
Reversed sequence

https://www.codewars.com/kata/5a00e05cc374cb34d100000d/go

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

package kata

func ReverseSeq(n int) []int {
	result := make([]int, n)
	number := len(result)

	for i := 0; i < n; i++ {
		result[i] = number
		number--
	}

	return result
}
