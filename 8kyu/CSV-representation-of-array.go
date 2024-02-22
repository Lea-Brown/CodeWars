/* 8 kyu
CSV representation of array

https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/go

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.
*/

// Helped by chatGPT

package kata

import (
	"strconv"
	"strings"
)

func ToCsvText(array [][]int) string {
	var result strings.Builder

	for i, row := range array {
		for j, value := range row {
			result.WriteString(strconv.Itoa(value))

			if j < len(row)-1 {
				result.WriteRune(',')
			}
		}

		if i < len(array)-1 {
			result.WriteRune('\n')
		}
	}

	return result.String()
}
