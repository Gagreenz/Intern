function inBetween(start, end) {
    return function inBetweenFilter(value) {
      return value >= start && value <= end;
    };
}
  
function inArray(arr) {
    return function inArrayFilter(value) {
      return arr.includes(value);
    };
}
  
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  
console.log(arr.filter(inBetween(2, 4)));
console.log(arr.filter(inArray([1, 2, 3])));