function sum(a) {
    let currentSum = a;
    function innerSum(b) {
      currentSum += b;
      return innerSum;
    }
    innerSum.toString = function() {
      return currentSum;
    };
    sum.valueOf = function() {
        return value;
      };
    return innerSum;
}

console.log(sum(1)(2) == 3)
console.log(sum(1)(2)(3) == 3)
console.log(sum(5)(-1)(2) == 3)
console.log(sum(6)(-1)(-2)(-3) == 3)
console.log(sum(0)(1)(2)(3)(4)(5) == 3)



