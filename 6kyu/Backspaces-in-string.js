/* 6 kyu
Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
    let newArr = [];
    s.split('').forEach(e => {
        e === '#' ? newArr.splice(-1) : newArr.push(e)
    })
    return newArr.join('')
}