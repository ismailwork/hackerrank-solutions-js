function kangaroo(x1, v1, x2, v2) {
  let max = 10000;
  for (let i = 0; i < max; i++) {
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 === x2) {
      return "YES"
    }
  }

  return "NO";
}