function salariesSum(salaries){
    let result = 0;
    for(let name in salaries){
        result += Number(salaries[name]);
    }
    return result;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(salariesSum(salaries));