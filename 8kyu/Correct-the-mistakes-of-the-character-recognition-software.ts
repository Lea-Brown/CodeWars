/* 8 kyu
Correct the mistakes of the character recognition software

https://www.codewars.com/kata/577bd026df78c19bca0002c0/typescript

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

export function correct(s: string): string {
  let result: string[] = [];
  for (const each of s) {
    result.push(
      each === "0" ? "O" : each === "1" ? "I" : each === "5" ? "S" : each
    );
  }
  return result.join("");
}
