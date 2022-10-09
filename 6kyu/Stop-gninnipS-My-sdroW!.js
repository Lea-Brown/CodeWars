/* 6kyu
Stop gninnipS My sdroW!

https://www.codewars.com/kata/5264d2b162488dc400000001/javascript 
*/

function spinWords(string) {
    let newArr = [];
    string = string.split(' ');
    string.forEach(x => {
        if (x.length > 4) {
            newArr.push(x.split('').reverse().join(''))
        } else {
            newArr.push(x)
        }
    })
    return newArr.join(' ')
}