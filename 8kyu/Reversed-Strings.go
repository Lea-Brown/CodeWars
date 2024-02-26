/* 8 kyu
Reversed Strings

https://www.codewars.com/kata/5168bb5dfe9a00b126000018/go

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// chatGPT

package kata

func Solution(word string) string {
	result := []rune(word)
	for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
		result[i], result[j] = result[j], result[i]
	}
	return string(result)
}
