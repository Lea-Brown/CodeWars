/* 8 kyu
Contamination #1 -String-

https://www.codewars.com/kata/596fba44963025c878000039/go

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"
*/

package kata

func Contamination(text, char string) string {
	result := ""
	for range text {
		result += char
	}
	return result
}
