/* 8 kyu
Training JS #21: Methods of String object--trim() and the string template

https://www.codewars.com/kata/5729b103dd8bac11a900119e/javascript

Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it
*/

// First attempt
function fiveLine(s) {
  s = s.replace(/\s/g, '');
  let result = [];
  for (let i = 0; i < 5; i++) {
    result.push(s.repeat(i + 1));
  }
  return result.join('\n');
}

//Second
function fiveLine(s) {
  s = s.replace(/\s/g, '');
  return Array(5)
    .fill('0')
    .map((e, i) => (e = s.repeat(i + 1)))
    .join('\n');
}

//Third after getting ideas
function fiveLine(s) {
  return [1, 2, 3, 4, 5].map((e, i) => (e = s.trim().repeat(i + 1))).join('\n');
}
