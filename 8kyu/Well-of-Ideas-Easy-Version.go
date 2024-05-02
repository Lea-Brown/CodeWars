/* 8 kyu
Well of Ideas - Easy Version

https://www.codewars.com/kata/57f222ce69e09c3630000212/go

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

package kata

import "strings"

func Well(x []string) string {
	count := 0
	for _, element := range x {
		if strings.Contains(element, "good") {
			count++
		}
	}
	switch count {
	case 0:
		return "Fail!"
	case 1, 2:
		return "Publish!"
	default:
		return "I smell a series!"
	}
}
