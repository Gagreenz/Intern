function multiplyNumeric(obj){
    for(key in obj){
        if(!isNaN(obj[key]))
            obj[key] *=2;
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
  // после вызова функции
let menuExpected = {
    width: 400,
    height: 600,
    title: "My menu"
};

console.log(JSON.stringify(menuExpected) === JSON.stringify(menu))