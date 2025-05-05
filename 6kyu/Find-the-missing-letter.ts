/* 6 kyu
Find the missing letter

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/typescript

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

export function findMissingLetter(array: string[]): string {
  const alphabetMap: { [key: string]: string } = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "",
    A: "B",
    B: "C",
    C: "D",
    D: "E",
    E: "F",
    F: "G",
    G: "H",
    H: "I",
    I: "J",
    J: "K",
    K: "L",
    L: "M",
    M: "N",
    N: "O",
    O: "P",
    P: "Q",
    Q: "R",
    R: "S",
    S: "T",
    T: "U",
    U: "V",
    V: "W",
    W: "X",
    X: "Y",
    Y: "Z",
    Z: "",
  };
  for (let i = 0; i < array.length; i++) {
    const nextLetter: string = alphabetMap[array[i]];
    if (array[i + 1] !== nextLetter) return nextLetter;
  }
  return "";
}
