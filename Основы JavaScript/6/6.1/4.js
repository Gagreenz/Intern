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
    let tmp = list;
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
}
  
printListFirst(list);


function printListSecond(list) {
    console.log(list.value);

    if (list.next) {
        printListSecond(list.next);
    }
}

printListSecond(list); 