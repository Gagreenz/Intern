function sum(a) {
    return function sumHelper(b) {
      return a + b;
    };
}
console.log(sum(5)(-1));