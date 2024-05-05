/* 8 kyu
Bin to Decimal

https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/go

Complete the function which converts a binary number (given as a string) to a decimal number.
*/

package kata

import "strconv"

func BinToDec(bin string) int {
	decimalInt, _ := strconv.ParseInt(bin, 2, 64)
	return int(decimalInt)
}
