function points(games) {
  let totalpoints = 0;

  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":").map(Number);

    if (x > y) {
      totalpoints += 3;
    } else if (x === y) {
      totalpoints += 1;
    }
  }
  return totalpoints;
}
