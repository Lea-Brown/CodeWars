/* 6kyu
Mirror object - tcejbo rorriM 

https://www.codewars.com/kata/586305e8916e244b66001a93/javascript

Mirror - Mirror
Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."
*/

const mirror = obj => {
    let newObj = {}
    Object.keys(obj).forEach(x => {
        newObj[`${x}`] = x.split('').reverse().join('')
    })
    return newObj;
};