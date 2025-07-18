/* 8 kyu
Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

export function paperwork(n: number, m: number): number {
  if (n <= 0 || m <= 0) return 0;
  return n * m;
}
