/* Is this a triangle? 7kyu
https://www.codewars.com/kata/56606694ec01347ce800001b/javascript */
function isTriangle(a, b, c) {
  let numbers = [a, b, c];
  let highestToLowest = numbers.sort((a, b) => b - a);
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (highestToLowest[0] < highestToLowest[1] + highestToLowest[2]) {
    return true;
  } else {
    return false;
  }
}

/* Friend or Foe? 7kyu
https://www.codewars.com/kata/55b42574ff091733d900002f/javascript */
function friend(friends) {
  return friends.filter((x) => x.length == 4);
}

/* Credit Card Mask 7kyu
https://www.codewars.com/kata/5412509bd436bd33920011bc */
function maskify(cc) {
  let lastFourDigits = cc.slice(-4);
  let newCC = "";
  for (let i = 0; i < cc.length - 4; i++) {
    newCC += "#";
  }
  return newCC + lastFourDigits;
}

/* Isograms 7kyu
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/
function isIsogram(str) {
  str = str.toLowerCase();
  let newArr = [];
  new Set(str).forEach((x) => {
    newArr.push(x);
  });
  newArr = newArr.join("");
  return newArr === str;
}

/* Multiples of 3 or 5 6kyu
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
*/
function solution(number) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    } else {
      total += 0;
    }
  }
  return total;
}

/* Beginner Series #3 Sum of Numbers 7kyu
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
*/
function getSum(a, b) {
  let total = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      total += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      total += i;
    }
  } else {
    total += a;
  }
  return total;
}

/* Jaden Casing Strings 7kyu
https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
*/
String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let str2 = arr.join(" ");
  return str2;
};

/* You're a square! 7kyu
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
*/
var isSquare = function (n) {
  if (n < 0) {
    return false;
  } else if (Number.isInteger(Math.sqrt(n)) === true) {
    return true;
  } else {
    return false;
  }
};

/* Two to One 7kyu
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
*/
function longest(s1, s2) {
  let newArr = [];
  let newString = "";
  for (let i = 0; i < s1.length; i++) {
    newArr.push(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    newArr.push(s2[i]);
  }
  newArr.sort();
  newArr.forEach((x) => {
    if (x !== newString[newString.length - 1]) {
      newString += x;
    }
  });
  return newString;
}

/* Likes Vs Dislikes 7kyu
https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
*/
function likeOrDislike(buttons) {
  let result = null;

  buttons.forEach((x) => {
    if (x === "Like" && result === true) {
      result = null;
    } else if (x === "Dislike" && result === false) {
      result = null;
    } else if (x === "Like") {
      result = true;
    } else if (x === "Dislike") {
      result = false;
    }
  });

  if (result === null) {
    return "Nothing";
  } else if (result === true) {
    return "Like";
  } else {
    return "Dislike";
  }
}

/* Sum Mixed Array 8kyu
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
*/
function sumMix(x) {
  let total = 0;
  x.forEach((x) => {
    if (x === "number") {
      total += x;
    } else {
      total += Number(x);
    }
  });
  return total;
}

/* Beginner Series #1 School Paperwork 8kyu
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
*/
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

/* You Can't Code Under Pressure #1 8kyu
https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
*/
function doubleInteger(i) {
  return i * 2;
}

/* String ends with? 7kyu
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
*/
function solution(str, ending) {
  return str.endsWith(ending);
}

/* Simple multiplication 8kyu
https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
*/
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

/* Basic Mathematical Operations 8kyu
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
*/
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

/* Growth of a Population 7kyu
https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
*/
function nbYear(p0, percent, aug, p) {
  let total = p0;
  let years = 0;
  for (let i = 0; total < p; i++) {
    total = Math.floor(total + total * (percent / 100) + aug);
    years++;
  }
  return years;
}

/* How good are you really? 8kyu
https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
*/
function betterThanAverage(classPoints, yourPoints) {
  let average = 0;
  classPoints.forEach((x) => {
    average += x;
  });
  average /= classPoints.length;
  return yourPoints > average;
}

/* Beginner Series #2 Clock 8kyu
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
*/
function past(h, m, s) {
  let total = 0;
  total += h * 3600000;
  total += m * 60000;
  total += s * 1000;
  return total;
}

/* Create Phone Number 6kyu
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript */
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

/* Who likes it? 6kyu
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"*/
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/* Does my number look big in this? 6kyu
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP. */
function narcissistic(value) {
  let total = 0;
  value = value.toString();
  for (let i = 0; i < value.length; i++) {
    total += value[i] ** value.length;
  }
  return total == value;
}

/* Total amount of points 8kyu
Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point */
function points(games) {
  let total = 0;
  games.forEach((x) => {
    if (x[0] > x[2]) {
      total += 3;
    } else if (x[0] < x[2]) {
      total += 0;
    } else {
      total += 1;
    }
  });
  return total;
}

/* Sum of two lowest positive integers 7kyu
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. */
function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

/* Complementary DNA 7kyu
"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */
function DNAStrand(dna) {
  let newString = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newString += "T";
    } else if (dna[i] === "T") {
      newString += "A";
    } else if (dna[i] === "C") {
      newString += "G";
    } else if (dna[i] === "G") {
      newString += "C";
    } else {
      newString += dna[i];
    }
  }
  return newString;
}

/* Shortest Word 7kyu
Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types. */
function findShort(s) {
  let total = s.split(" ").map((x) => {
    return x.length;
  });
  total = total.sort(function (a, b) {
    return a - b;
  });
  return total[0];
}

/* Exes and Ohs 7kyu
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      x++;
    } else if (str[i] === "o" || str[i] === "O") {
      o++;
    } else {
      // do nothing. Probably a better way to write this.
    }
  }
  return x === o;
}

/* List Filtering 7kyu
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */
function filter_list(l) {
  let numOnly = [];
  l.forEach((x) => (typeof x === "number" ? numOnly.push(x) : 0));
  return numOnly;
}

/* Descending Order 7kyu
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */
function descendingOrder(n) {
  return n.toString().split("").sort().reverse().join("") * Math.sign(n);
}

/* Get the Middle Character 7kyu
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.Had to google this one. */
function getMiddle(s) {
  let position;
  let length;
  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }
  return s.substring(position, position + length);
}

/* Highest and Lowest 7 kyu
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */
function highAndLow(numbers) {
  let sorted = numbers.split(" ").sort((a, b) => a - b);
  return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}

/* Function 1 - hello world 8kyu
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends? */
function greet() {
  let arr = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"];
  let hello = "";
  arr.forEach((x) => (hello += x));
  return hello;
}

/* Counting sheep... 8 kyu
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
function countSheeps(arrayOfSheep) {
  let totalSheep = 0;
  arrayOfSheep.forEach((sheep) => (sheep ? totalSheep++ : 0));
  return totalSheep;
}

/* Summation 8 kyu
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
let summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};
