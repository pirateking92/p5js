function mergeAlternately(word1: string, word2: string): string {
  let stringHold = "";
  const length1 = word1.length;
  const length2 = word2.length;
  const maxLength = Math.max(length1, length2);

  for (let i = 0; i < maxLength; i++) {
    if (i < length1) {
      stringHold += word1.charAt(i);
    }
    if (i < length2) {
      stringHold += word2.charAt(i);
    }
  }
  return stringHold;
}
