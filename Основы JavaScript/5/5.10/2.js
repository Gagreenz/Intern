function topSalary(salaries){
    if(salaries.length === 0) return null;
    let max = ['',0];
    for(let employee of Object.entries(salaries))
    {
        let [,salary] = employee;
        let [,maxSalary] = max;
        if(salary > maxSalary){
            max = employee;
        }
    }
    return max[0];
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));