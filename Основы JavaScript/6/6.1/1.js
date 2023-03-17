function sumToWithLoop(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
  
function sumToWithRecursion(n) {
  if(n==1) {
    return 1;
  }
  return n + sumToWithRecursion(n-1);
}
  
function sumToWithArithmeticProgression(n) {
  return(n * (n + 1))/2;
}
  
const n = 100;

console.log(sumToWithLoop(n));
console.log(sumToWithRecursion(n));
console.log(sumToWithArithmeticProgression(n));