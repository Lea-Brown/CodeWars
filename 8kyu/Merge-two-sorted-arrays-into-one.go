/* 8 kyu
Merge two sorted arrays into one

https://www.codewars.com/kata/5899642f6e1b25935d000161/go

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

package kata

import "sort"

func MergeArrays(arr1, arr2 []int) []int {
	combined := append(arr1, arr2...)
	var result []int
	sort.Ints(combined)
	for i := 0; i < len(combined); i++ {
		if i == 0 || combined[i] != result[len(result)-1] {
			result = append(result, combined[i])
		}
	}
	return result
}
