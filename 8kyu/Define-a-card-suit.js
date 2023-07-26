/* 8 kyu
Define a card suit

https://www.codewars.com/kata/5a360620f28b82a711000047/javascript

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  return card[card.length - 1] === '♣'
    ? 'clubs'
    : card[card.length - 1] === '♠'
    ? 'spades'
    : card[card.length - 1] === '♦'
    ? 'diamonds'
    : 'hearts';
}
