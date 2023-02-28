function unique(arr) {
    let result = []
    for(let word of arr)
        if(result.includes(word)) continue;
        else result.push(word);
    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O