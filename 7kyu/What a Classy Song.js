/**
 * 7 kyu
 * What a "Classy" Song
 * https://www.codewars.com/kata/6089c7992df556001253ba7d/javascript
 *
 * Represents a song and tracks people who have listened to it.
 */
class Song {
  /**
   * Creates a Song instance.
   *
   * @param {string} title - The title of the song.
   * @param {string} artist - The artist who performed the song.
   */
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.set = new Set();
  }

  /**
   * Counts the number of new unique listeners.
   *
   * Names are compared case-insensitively. A listener is only
   * counted the first time they are added to the song's listeners.
   *
   * @param {string[]} names - An array of listener names.
   * @returns {number} The number of new unique listeners.
   */
  howMany(names) {
    let count = 0;

    for (const name of names) {
      const lowerName = name.toLowerCase();

      if (!this.set.has(lowerName)) {
        this.set.add(lowerName);
        count++;
      }
    }

    return count;
  }
}

// Example 1
const song1 = new Song("Imagine", "John Lennon");
console.log(song1.howMany(["Alice", "Bob", "Charlie"]));
// 3

// Example 2
const song2 = new Song("Imagine", "John Lennon");
console.log(song2.howMany(["Alice", "alice", "Bob", "BOB"]));
// 2

// Example 3
const song3 = new Song("Imagine", "John Lennon");
song3.howMany(["Alice", "Bob"]);
console.log(song3.howMany(["Bob", "Charlie", "ALICE"]));
// 1
