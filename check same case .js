function sameCase(char1, char2) {
  if (!/[a-zA-Z]/.test(char1) || !/[a-zA-Z]/.test(char2)) {
    return -1;
  }

  if (
    (char1 === char1.toUpperCase() && char2 === char2.toUpperCase()) ||
    (char1 === char1.toLowerCase() && char2 === char2.toLowerCase())
  ) {
    return 1;
  }

  return 0;
}
