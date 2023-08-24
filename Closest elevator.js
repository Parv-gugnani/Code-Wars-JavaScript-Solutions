/*
Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
*/
function elevator(left, right, call) {
  const distanceToLeft = Math.abs(left - call);
  const distanceToRight = Math.abs(right - call);

  if (distanceToLeft < distanceToRight) {
    return "left";
  } else {
    return "right";
  }
}
