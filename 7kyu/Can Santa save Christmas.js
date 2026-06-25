/**
 * 7 kyu
 * Can Santa save Christmas?
 * https://www.codewars.com/kata/5857e8bb9948644aa1000246/javascript
 *
 * Determines whether a list of time durations stays within a 24‑hour limit.
 *
 * Each duration must be in the format "HH:MM:SS". The function converts all
 * durations to seconds, accumulates them, and returns `false` immediately if
 * the running total exceeds 24 hours.
 *
 * @param {string[]} durations - Array of time strings formatted as "HH:MM:SS".
 * @returns {boolean} `true` if total time is ≤ 24 hours, otherwise `false`.
 *
 * @example
 * // Total = 01:00:00 + 02:30:00 = 3.5 hours → within limit
 * determineTime(["01:00:00", "02:30:00"]);
 * // → true
 *
 * @example
 * // Total = 10:00:00 + 15:00:00 = 25 hours → exceeds limit
 * determineTime(["10:00:00", "15:00:00"]);
 * // → false
 *
 * @example
 * // Multiple small durations that sum to exactly 24 hours
 * determineTime(["08:00:00", "08:00:00", "08:00:00"]);
 * // → true
 */
function determineTime(durations) {
  let total = [0, 0, 0];
  for (const each of durations) {
    each.split(":").forEach((e, i) => (total[i] += +e));
    if (total[2] >= 60) {
      total[1] += 1;
      total[2] -= 60;
    }
    if (total[1] >= 60) {
      total[0] += 1;
      total[1] -= 60;
    }
    if (
      total[0] > 24 ||
      (total[0] >= 24 && total[1] > 0) ||
      (total[0] >= 24 && total[2] > 0)
    )
      return false;
  }
  return true;
}

function determineTime(durations) {
  let sec = 0;
  for (const each of durations) {
    const time = each.split(":");
    sec += +time[0] * 3600 + +time[1] * 60 + +time[2];
    if (sec / 3600 > 24) return false;
  }
  return true;
}
