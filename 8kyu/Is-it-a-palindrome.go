/* 8 kyu
Is it a palindrome?

https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/go

Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

package kata

import "strings"

func IsPalindrome(str string) bool {
	str = strings.ToLower(strings.ReplaceAll(str, " ", ""))

	i := 0
	j := len(str) - 1

	for i < j {
		if str[i] != str[j] {
			return false
		}
		i++
		j--
	}
	return true
}
