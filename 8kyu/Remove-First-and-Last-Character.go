/* 8 kyu
Remove First and Last Character

https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/go

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

package kata

func RemoveChar(word string) string {
	return word[1 : len(word)-1]
}
