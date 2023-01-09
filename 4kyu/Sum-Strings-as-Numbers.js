/* 4 kyu
Sum Strings as Numbers

https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

function sumStrings(a, b) {
    let firstNum = a.split('');
    let secondNum = b.split('');
    let carryOver = 0;
    let result = [];
    let length = Math.max(firstNum.length, secondNum.length);
    for (let i = 0; i < length; i++) {
        if (firstNum.length === 0) firstNum.push('0');
        if (secondNum.length === 0) secondNum.push('0');
        let number = Number(firstNum.splice(-1)) + Number(secondNum.splice(-1)) + carryOver;
        carryOver = 0;
        if (number > 9) {
            result.unshift(Number(number.toString().split('')[1]));
            carryOver = 1
        } else {
            result.unshift(number.toString());
        }
    }
    if (carryOver == 1) result.unshift(carryOver);
    if (result[0] === '0') result.splice(0, 1);
    return result.join('');
}

// other peoples code

function sumStrings(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}

// I had tried

function sumStrings(a, b) {
    return BigInt(a + b).toString();
}