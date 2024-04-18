/* 8 kyu
Cat years, Dog years

https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/go

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

package kata

func CalculateYears(years int) (result [3]int) {
	var arr [3]int

	if years == 1 {
		arr[0] = 1
		arr[1] = 15
		arr[2] = 15
	} else if years == 2 {
		arr[0] = 2
		arr[1] = 24
		arr[2] = 24
	} else {
		arr[0] = years
		arr[1] = 24 + (years-2)*4
		arr[2] = 24 + (years-2)*5
	}

	return arr
}

// chatgpt refractored and edited by me

package kata

func CalculateYears(years int) [3]int {
	switch years {
	case 1:
		return [3]int{1, 15, 15}
	case 2:
		return [3]int{2, 24, 24}
	default:
		return [3]int{years, 24 + (years-2)*4, 24 + (years-2)*5}
	}
}
