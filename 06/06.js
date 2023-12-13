function maxDistance(movements) {
  let distance = 0;
  let last_movement = "*";

  for (i in movements) {
    let current_direction = movements[i];

    if (current_direction === ">") {
      distance += 1;
      last_movement = current_direction;
    } else if (current_direction === "<") {
      distance -= 1;
      last_movement = current_direction;
    } else if (current_direction === "*") {
      last_movement === "<" ? (distance -= 1) : (distance += 1);
    }
  }

  return Math.abs(distance);
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
