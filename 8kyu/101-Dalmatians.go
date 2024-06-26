/* 8 kyu
101 Dalmatians - squash the bugs, not the dogs!

https://www.codewars.com/kata/56f6919a6b88de18ff000b36/go

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!
*/

package kata

func HowManyDalmatians(num int) string {
	switch {
	case num <= 10:
		return "Hardly any"
	case num <= 50:
		return "More than a handful!"
	case num <= 100:
		return "Woah that's a lot of dogs!"
	default:
		return "101 DALMATIONS!!!"
	}
}
