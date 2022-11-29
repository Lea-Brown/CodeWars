/* 6 kyu
Kebabize

https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
    return str.split(/\d/g).join('').split(/(?=[A-Z])/g).join('-').toLowerCase();
}