/* 7 kyu
Is this a triangle?

https://www.codewars.com/kata/56606694ec01347ce800001b/go

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false
*/

package kata

func IsTriangle(a, b, c int) bool {
	return (a+b > c) && (a+c > b) && (b+c > a)
}
