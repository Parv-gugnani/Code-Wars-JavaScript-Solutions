function warnTheSheep(queue) {
  const wolfIndex = queue.findIndex((animal) => animal === "wolf");
  const sheepNumber = queue.length - wolfIndex - 1;

  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}
