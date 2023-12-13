function adjustLights(lights) {
  let initial = lights[0];
  let changes = 0;

  let index = 0;
  while (index < lights.length) {
    if (index % 2 === 1 && lights[index] === initial) changes++;
    else if (index % 2 === 0 && lights[index] !== initial) changes++;
    index++;
  }

  const reversed = [...lights].reverse();
  let index_reverse = 0;
  let changes_reverse = 0;

  while (index_reverse < reversed.length) {
    if (index_reverse % 2 === 0 && lights[index_reverse] === initial)
      changes_reverse++;
    else if (index_reverse % 2 === 1 && lights[index_reverse] !== initial)
      changes_reverse++;
    index_reverse++;
  }

  return Math.min(changes, changes_reverse);
}
