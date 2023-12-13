function createChristmasTree(ornaments, height) {
  let tree = "";
  let ornamentsIndex = 0;

  for (let level = 1; level <= height; level++) {
    let newline = "";
    let spaces = " ".repeat(height - level);

    for (let j = 0; j < level; j++) {
      newline += " " + ornaments[ornamentsIndex % ornaments.length];
      ornamentsIndex++;
    }
    tree += spaces + newline.trim() + "\n";
  }

  tree += " ".repeat(height - 1);
  tree += "|\n";

  return tree;
}

console.log(createChristmasTree("awu", 25));
