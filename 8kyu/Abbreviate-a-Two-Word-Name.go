/* 8 kyu
Abbreviate a Two Word Name

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/go

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

package kata

import (
	"strings"
)

func AbbrevName(name string) string {
	names := strings.Split(name, " ")
	var firstLetters []string
	for _, n := range names {
		firstLetters = append(firstLetters, strings.ToUpper(n[:1]))
	}
	return strings.Join(firstLetters, ".")
}
