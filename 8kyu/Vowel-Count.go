/* 7 kyu
Vowel Count

https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

package kata

import "strings"

func GetCount(str string) (count int) {
	vowels := "aeiou"
	for _, char := range str {
		if strings.ContainsRune(vowels, char) {
			count++
		}
	}
	return
}
