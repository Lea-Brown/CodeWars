/* 8 kyu
Basic variable assignment

https://www.codewars.com/kata/50ee6b0bdeab583673000025/go

This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
*/

package kata

func Namevar() string {
	a := "code"
	b := "wa.rs"
	name := a + b
	return name
}
