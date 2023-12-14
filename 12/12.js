function checkIsValidCopy(original, copy) {
  const chars = ["#", "+", ":", ".", " "];

  for (let i = 0; i < original.length; i++) {
    if (
      chars.includes(original[i]) &&
      chars.indexOf(original[i]) > chars.indexOf(copy[i])
    ) {
      return false;
    } else if (
      original[i] !== copy[i] &&
      original[i].toLowerCase() !== copy[i] &&
      !chars.includes(copy[i])
    ) {
      return false;
    }
  }
  return true;
}
