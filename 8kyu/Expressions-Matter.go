/* 8 kyu
Expressions Matter

https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/go

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
*/

package kata

import "math"

func ExpressionMatter(a int, b int, c int) int {
	num1 := a * (b + c)
	num2 := a * b * c
	num3 := a + b*c
	num4 := (a + b) * c
	num5 := a + b + c
	max1 := math.Max(float64(num1), float64(num2))
	max2 := math.Max(float64(num3), float64(num4))
	max3 := math.Max(max1, float64(num5))
	return int(math.Max(max2, max3))
}
