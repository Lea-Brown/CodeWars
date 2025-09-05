/* 8 kyu
Well of Ideas - Easy Version

https://www.codewars.com/kata/57f222ce69e09c3630000212/typescript

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

export function well(x: string[]): string {
  const numGoodIdeas: number = x.filter((e) => e === "good").length;
  return numGoodIdeas === 0
    ? "Fail!"
    : numGoodIdeas > 2
    ? "I smell a series!"
    : "Publish!";
}
