function quadratic(x1, x2) {
  // We know 'a' is 1
  const a = 1;

  // Use the magic equation to find 'b' and 'c'
  const b = -(x1 + x2);
  const c = x1 * x2;

  // Return the coefficients as an array [a, b, c]
  return [a, b, c];
}
