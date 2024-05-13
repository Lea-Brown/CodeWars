/* 7 kyu
Highest and Lowest

https://www.codewars.com/kata/554b4ac871d6813a03000035

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
HighAndLow("1 2 3 4 5")  // return "5 1"
HighAndLow("1 2 -3 4 5") // return "5 -3"
HighAndLow("1 9 3 4 -5") // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

package kata

import (
	"fmt"
	"strconv"
	"strings"
)

func HighAndLow(numbers string) string {
	strNums := strings.Fields(numbers)
	nums := make([]int, len(strNums))
	for i, str := range strNums {
		num, _ := strconv.Atoi(str)
		nums[i] = num
	}

	highest := nums[0]
	lowest := nums[0]
	for _, num := range nums {
		if num > highest {
			highest = num
		}
		if num < lowest {
			lowest = num
		}
	}

	return fmt.Sprintf("%d %d", highest, lowest)
}
