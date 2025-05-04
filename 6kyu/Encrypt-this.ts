/* 6 kyu
Encrypt this!

https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
*/

export const encryptThis = (str: string): string => {
  if (str.length === 0) return "";
  let result: string[] = [];
  str.split(" ").forEach((e) => {
    let chars = e.split("");
    [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];
    chars[0] = e.charCodeAt(0).toString();
    result.push(chars.join(""));
  });
  return result.join(" ");
};
