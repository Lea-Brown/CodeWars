/* 5 kyu
Valid Parentheses

https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
    if (parens.length % 2 !== 0) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
    ]);

    for (let i = 0; i < parens.length; i += 1) {
        if (map.has(parens[i])) {
            stack.push(map.get(parens[i]));
        } else if (parens[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}