/* 6 kyu
Street Fighter 2 - Character Selection

https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript
*/

type Move = "down" | "up" | "right" | "left";

export function streetFighterSelection(
  fighters: string[][],
  position: number[],
  moves: Move[]
) {
  let result: string[] = [];
  for (const each of moves) {
    if (each === "left") {
      position[1] === 0
        ? (position[1] = fighters[1].length - 1)
        : position[1]--;
    }
    if (each === "right") {
      position[1] === fighters[1].length - 1
        ? (position[1] = 0)
        : position[1]++;
    }
    if (each === "up") {
      if (position[0] === 1) position[0] = 0;
    }
    if (each === "down") {
      if (position[0] === 0) position[0] = 1;
    }
    result.push(fighters[position[0]][position[1]]);
  }
  return result;
}
