/* 6 kyu
Persistent Bugger.

https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript

DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    let result = num.toString();
    let i = 0
    while (result.length > 1) {
        result = result.split('').reduce((acc, x) => acc * x, 1).toString();
        i++;
    }
    return i;
}

/* 7 kyu
Find the next perfect square!

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript

DESCRIPTION:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
    } else {
        return -1;
    }
}

/* 7 kyu
Printer Errors

https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript

DESCRIPTION:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
    let errors = s.match(/[^abcdefghijklm]/g) || [];
    return `${errors.length}/${s.length}`;
}

/* 7 kyu
Binary Pyramid 101

https://www.codewars.com/kata/5596700a386158e3aa000011/javascript

DESCRIPTION:
Given two numbers m and n, such that 0 ≤ m ≤ n :

convert all numbers from m to n (inclusive) to binary
sum them as if they were in base 10
convert the result to binary
return as a string
Example
1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010
*/

function binaryPyramid(m, n) {
    let result = 0;
    for (let i = m; i <= n; i++) {
        result += Number(i.toString(2))
    }
    return result.toString(2);
}