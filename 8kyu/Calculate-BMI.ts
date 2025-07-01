/* 8 kyu
Calculate BMI

https://www.codewars.com/kata/57a429e253ba3381850000fb/typescript

Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

export function bmi(weight: number, height: number): string {
  const check: number = weight / height ** 2;
  return check <= 18.5
    ? "Underweight"
    : check <= 25
    ? "Normal"
    : check <= 30
    ? "Overweight"
    : "Obese";
}
