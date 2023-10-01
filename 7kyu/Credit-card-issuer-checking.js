/* 7 kyu
Credit card issuer checking

https://www.codewars.com/kata/5701e43f86306a615c001868/javascript

Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

function getIssuer(number) {
  const AMEX = ['34', '37'];
  const Mastercard = ['51', '52', '53', '54', '55'];

  number = number.toString();

  return AMEX.includes(number.slice(0, 2)) && number.length == 15
    ? 'AMEX'
    : (number.length == 13 && number[0] == '4') ||
      (number.length == 16 && number[0] == '4')
    ? 'VISA'
    : Mastercard.includes(number.slice(0, 2)) && number.length == 16
    ? 'Mastercard'
    : number.slice(0, 4) == '6011' && number.length == 16
    ? 'Discover'
    : 'Unknown';
}
