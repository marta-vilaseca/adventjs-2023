function getIndexsForPalindrome(word) {
  if (word === word.split("").reverse().join("")) return [];

  let character, swapped;
  for (character = 0; character < word.length; character++) {
    for (swapped = character + 1; swapped < word.length; swapped++) {
      let tempWord = word.split("");
      [tempWord[character], tempWord[swapped]] = [
        tempWord[swapped],
        tempWord[character],
      ];

      let swappedWord = tempWord.join("");
      let reverseWord = swappedWord.split("").reverse().join("");

      if (swappedWord === reverseWord) {
        return [character, swapped];
      }
    }
  }

  return null;
}
