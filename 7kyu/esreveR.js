/* 7 kyu
esreveR

https://www.codewars.com/kata/5413759479ba273f8100003d/javascript

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

function reverse(array) {
    let newArr = [];
    while (array.length > 0) newArr.push(array.pop());
    return newArr;
}