/* 8 kyu
Square(n) Sum

https://www.codewars.com/kata/515e271a311df0350d00000f/go

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

package kata

func SquareSum(numbers []int) int {
	result := 0

	for _, value := range numbers {
		result += value * value
	}

	return result
}
