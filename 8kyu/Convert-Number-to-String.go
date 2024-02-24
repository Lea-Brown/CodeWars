/* 8 kyu
Convert a Number to a String!

https://www.codewars.com/kata/5265326f5fda8eb1160004c8/go

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

package kata

import (
	"strconv"
)

func NumberToString(n int) string {
	return strconv.Itoa(n)
}
