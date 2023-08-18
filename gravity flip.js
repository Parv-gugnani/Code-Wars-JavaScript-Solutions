function flip(direction, array) {
  if (direction === "R") {
    return array.sort((a, b) => a - b);
  } else if (direction === "L") {
    return array.sort((a, b) => b - a);
  } else {
    throw new Error('Invalid direction. Use "R" for right or "L" for left.');
  }
}
