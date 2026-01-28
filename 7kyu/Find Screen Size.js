/**
 * 7 kyu
 * Find Screen Size
 * https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/javascript
 *
 * Calculates the screen height based on a given width and aspect ratio.
 *
 * The aspect ratio should be provided in the format "width:height"
 * (for example, "16:9"). The function returns a string in the format
 * "<width>x<calculatedHeight>".
 *
 * @param {number} width - The screen width in pixels.
 * @param {string} ratio - The aspect ratio as a string (e.g. "16:9").
 * @returns {string} The screen resolution in "widthxheight" format.
 *
 * @example
 * findScreenHeight(1280, "16:9") // "1280x720"
 * findScreenHeight(1920, "16:9") // "1920x1080"
 */
function findScreenHeight(width, ratio) {
  const [ratioWidth, ratioHeight] = ratio.split(":");
  return `${width}x${(width / ratioWidth) * ratioHeight}`;
}
