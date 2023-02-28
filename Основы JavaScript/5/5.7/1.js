function unique(arr) {
    let result = new Set();

    arr.forEach(element => {
       result.add(element); 
    });

    return result;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare,Krishna,:-O