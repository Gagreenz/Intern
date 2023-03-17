function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
}
  
printNumbers(1, 5);
  
function recPrintNumbers(from, to) {
    console.log(from);
    if (from < to) {
      setTimeout(function() {
        recPrintNumbers(from + 1, to);
      }, 1000);
    }
}
  
recPrintNumbers(1, 5);
  