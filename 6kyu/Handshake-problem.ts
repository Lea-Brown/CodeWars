/* 6 kyu
Handshake problem

https://www.codewars.com/kata/5574835e3e404a0bed00001b/typescript

Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
*/

// chatGPT
export function getParticipants(handshakes: number): number {
  return handshakes == 0
    ? 0
    : Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2);
}
