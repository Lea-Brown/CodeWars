/**
 * 6 kyu
 * Santa's Master Plan
 * https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304/javascript
 *
 * Works out who is attending an event.
 *
 * A person attends if they accepted, or if they have not replied yet.
 * A person is left out only if they declined.
 *
 * @param {string[]} peopleInvited - Names of everyone invited.
 * @param {{name: string, response: string}[]} responses - Replies received so far.
 *   Each reply has a `name` and a `response` (e.g. "accepted" or "declined").
 * @returns {string[]} Names of people who are attending.
 *
 * @example
 * // Mixed replies: one accepts, one declines
 * getAttendees(
 *   ["Amy", "Ben"],
 *   [
 *     { name: "Amy", response: "accepted" },
 *     { name: "Ben", response: "declined" },
 *   ]
 * );
 * // returns ["Amy"]
 *
 * @example
 * // No replies yet: everyone still counts as attending
 * getAttendees(["Dan", "Elle"], []);
 * // returns ["Dan", "Elle"]
 *
 * @example
 * // Mix of accepted, declined, and no reply
 * getAttendees(
 *   ["Amy", "Ben", "Cara", "Dan"],
 *   [
 *     { name: "Amy", response: "accepted" },
 *     { name: "Ben", response: "declined" },
 *   ]
 * );
 * // returns ["Amy", "Cara", "Dan"]
 */
function getAttendees(peopleInvited, responses) {
  let result = [];
  let obj = {};
  for (const each of responses) {
    each.response === "accepted"
      ? (obj[each.name] = true)
      : (obj[each.name] = false);
  }
  for (const each of peopleInvited) {
    if (!Object.hasOwn(obj, each)) result.push(each);
    if (obj[each]) result.push(each);
  }
  return result;
}
