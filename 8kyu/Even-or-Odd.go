/* 8 kyu
Even or Odd

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/go
*/

package kata

func EvenOrOdd(number int) string {
	if number%2 == 0 {
		return "Even"
	} else {
		return "Odd"
	}
}
