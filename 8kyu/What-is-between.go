/* 8 kyu
What is between?

https://www.codewars.com/kata/55ecd718f46fba02e5000029/go

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

package kata

func Between(a, b int) []int {
	length := b - a + 1
	arr := make([]int, length)
	count := 0
	for i := a; i <= b; i++ {
		arr[count] = i
		count++
	}
	return arr
}

// chatgpt refractored

package kata

func Between(a, b int) []int {
	length := b - a + 1
	arr := make([]int, length)

	for i := range arr {
		arr[i] = a + i
	}

	return arr
}