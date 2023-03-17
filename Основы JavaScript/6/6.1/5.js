let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};


function printListFirst(list) {
    let values = [];
    let current = list;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    for (let i = values.length - 1; i >= 0; i--) {
      console.log(values[i]);
    }
}
  
printListFirst(list);


function printListSecond(list) {
    if (list.next) {
        printListSecond(list.next);
    }
    console.log(list.value);
}

printListSecond(list); 