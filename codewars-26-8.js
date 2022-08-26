/* 7 kyu
Binary Addition

https://www.codewars.com/kata/551f37452ff852b7bd000139/javascript

DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
    return (a + b).toString(2)
}

/* 6 kyu
Counting Duplicates

https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
    let sorted = text.toUpperCase().split('').sort();
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    return new Set(result).size
}