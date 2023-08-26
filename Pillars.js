function pillars(numPill, dist, width) {
  if (numPill <= 1 || dist < 10 || dist > 30 || width < 10 || width > 50) {
    return 0;
  }
  const distance = (numPill - 1) * dist + (numPill - 2) * width;
  return distance;
}
