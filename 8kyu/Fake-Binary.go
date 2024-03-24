/* 8 kyu
Fake Binary

https://www.codewars.com/kata/57eae65a4321032ce000002d/go

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

package kata

import "strings"

func FakeBin(x string) string {
	var result strings.Builder

	for _, char := range x {
		if char >= '5' {
			result.WriteString("1")
		} else {
			result.WriteString("0")
		}
	}

	return result.String()
}
