/* 8 kyu
Volume of a Cuboid

https://www.codewars.com/kata/58261acb22be6e2ed800003a/go

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

package kata

func GetVolumeOfCuboid(length, width, height float64) float64 {
	return length * width * height
}
