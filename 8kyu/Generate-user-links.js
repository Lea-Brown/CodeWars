/* 8 kyu
Generate user links

https://www.codewars.com/kata/57037ed25a7263ac35000c80/javascript

Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

const generateLink = user =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`;
