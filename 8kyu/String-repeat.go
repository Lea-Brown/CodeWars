/* 8 kyu
String repeat

https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/go

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

package kata

func RepeatStr(repetitions int, value string) string {
	result := ""

	for i := 0; i < repetitions; i++ {
		result = result + value
	}

	return result
}
