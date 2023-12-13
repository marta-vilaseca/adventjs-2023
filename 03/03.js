function findNaughtyStep(original, modified) {
  const modified_array = modified.split("");
  const original_array = original.split("");

  let difference = "";

  const longest_array =
    modified_array.length > original_array.length
      ? modified_array
      : original_array;

  for (let i = 0; i < longest_array.length; i++) {
    if (modified_array[i] != original_array[i]) {
      difference = longest_array[i];
      break;
    }
  }

  return difference.toString();
}
