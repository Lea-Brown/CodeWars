/**
 * 7 kyu
 * Who's Online?
 * https://www.codewars.com/kata/5b6375f707a2664ada00002a/javascript
 *
 * Groups friends by their current online status.
 *
 * Friends who have been online but inactive for more than 10 minutes
 * are classified as "away".
 *
 * @param {Array<{username: string, status: string, lastActivity: number}>} friends
 * An array of friend objects.
 * @returns {Object<string, string[]>} An object containing usernames grouped by status.
 *
 * @example
 * whosOnline([
 *   { username: "Alice", status: "online", lastActivity: 5 },
 *   { username: "Bob", status: "online", lastActivity: 15 },
 *   { username: "Charlie", status: "offline", lastActivity: 0 }
 * ]);
 * // { online: ["Alice"], away: ["Bob"], offline: ["Charlie"] }
 *
 * @example
 * whosOnline([
 *   { username: "Dave", status: "online", lastActivity: 20 },
 *   { username: "Eve", status: "online", lastActivity: 3 }
 * ]);
 * // { away: ["Dave"], online: ["Eve"] }
 *
 * @example
 * whosOnline([
 *   { username: "Frank", status: "offline", lastActivity: 50 },
 *   { username: "Grace", status: "offline", lastActivity: 2 }
 * ]);
 * // { offline: ["Frank", "Grace"] }
 */
function whosOnline(friends) {
  let result = {};
  for (const each of friends) {
    const status =
      each.status === "online" && each.lastActivity > 10 ? "away" : each.status;
    (result[status] ??= []).push(each.username);
  }
  return result;
}
