/* 6 kyu
Unique In Order

https://www.codewars.com/kata/54e6533c92449cc251001667/typescript

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  let result: any[] = [];
  for (const each of iterable) {
    if (each !== result[result.length - 1]) result.push(each);
  }
  return result;
}
