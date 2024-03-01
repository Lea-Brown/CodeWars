/* 7kyu
Credit Card Mask 

https://www.codewars.com/kata/5412509bd436bd33920011bc */
function maskify(cc) {
  let lastFourDigits = cc.slice(-4);
  let newCC = "";
  for (let i = 0; i < cc.length - 4; i++) {
    newCC += "#";
  }
  return newCC + lastFourDigits;
}
