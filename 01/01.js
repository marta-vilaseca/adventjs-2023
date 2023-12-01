function findFirstRepeated(gifts) {
  const unique = new Set();
  for (let i = 0; i < gifts.length; i++) {
    if (unique.has(gifts[i])) {
      return gifts[i];
    } else {
      unique.add(gifts[i]);
    }
  }
  return -1;
}
