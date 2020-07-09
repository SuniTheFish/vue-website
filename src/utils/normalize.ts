/**
 * Convert words delimited by - or camelCase to title case strings
 * @param string the string to normalize
 */
export function normalizeString(string: string): string {
  return string
    .replace(/[-_]/g, " ") // dashes to spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase to spaces
    .toLowerCase()
    .split(" ")
    .reduce(
      // capitalize each word
      (str, word) => `${str} ${word[0].toUpperCase()}${word.slice(1)}`,
      ""
    )
    .trim();
}
