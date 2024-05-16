/* 7 kyu
Shortest Word

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/go

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

package kata

import "strings"

func FindShort(s string) int {
	words := strings.Fields(s)
	shortestWord := words[0]

	if len(words) == 0 {
		return 0
	}

	for _, word := range words[1:] {
		if len(word) < len(shortestWord) {
			shortestWord = word
		}
	}

	return len(shortestWord)
}
