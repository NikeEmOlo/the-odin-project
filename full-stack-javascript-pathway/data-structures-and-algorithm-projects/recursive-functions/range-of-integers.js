function intRange(x, y) {
  if (x + 1 >= y) return [];
  return [x + 1, ...intRange(x + 1, y)];
}