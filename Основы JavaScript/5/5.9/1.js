let sumSalaries = (obj) =>{
    let sum = 0;
    for(let item of Object.values(obj)){
        sum += Number(item);
    }
    return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log( sumSalaries(salaries) ); // 650