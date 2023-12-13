function drawGift(size, symbol) {
  let cube = [];

  let space = " ";
  let borderSymbol = "#";
  let bgSymbol = symbol.toString();
  let width = size - 2;
  let i = 1;

  while (i <= size) {
    let newline = "";
    newline += space.repeat(size - i);

    if (i === 1) {
      newline += borderSymbol.repeat(size);
    } else if (i === size) {
      newline +=
        borderSymbol.repeat(size) + bgSymbol.repeat(width) + borderSymbol;
    } else {
      newline +=
        borderSymbol +
        bgSymbol.repeat(width) +
        borderSymbol +
        bgSymbol.repeat(i - 2) +
        borderSymbol;
    }

    newline += "\n";
    cube.push(newline);
    i++;
  }

  let j = width;
  while (j >= 0) {
    let newline = cube[j].trim() + "\n";
    cube.push(newline);
    j--;
  }
  const stringCube = cube.join("");
  return stringCube;
}
