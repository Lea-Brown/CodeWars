/* 7 kyu
Mumbling

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/go

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

package kata

import (
	"strings"
	"unicode"
)

func Accum(s string) string {
	var result []string
	for i, char := range s {
		firstChar := unicode.ToUpper(char)
		repeatedChars := strings.Repeat(strings.ToLower(string(char)), i)
		segment := string(firstChar) + repeatedChars
		result = append(result, segment)
	}
	return strings.Join(result, "-")
}
