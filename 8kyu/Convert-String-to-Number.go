/* 8 kyu
Convert a String to a Number!

https://www.codewars.com/kata/544675c6f971f7399a000e79/go

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

package kata

import "strconv"

func StringToNumber(str string) (int, error) {
	return strconv.Atoi(str)
}

// original

package kata
import "strconv"

func StringToNumber(str string) (int, error) {
	num, err := strconv.Atoi(str)
	return num, err
}