/* 6 kyu
Mexican Wave

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript

wave("hello") => {"Hello", "hEllo", "heLlo", "helLo", "hellO"}
*/

export function wave(str: string): Array<string> {
  let result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return result;
}
