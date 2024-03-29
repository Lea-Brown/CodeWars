/* 8 kyu
If you can't sleep, just count sheep!!

 https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/go

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

package kata

import "fmt"

func countSheep(num int) string {
	result := ""

	for i := 1; i <= num; i++ {
		result += fmt.Sprintf("%d sheep...", i)
	}

	return result
}
