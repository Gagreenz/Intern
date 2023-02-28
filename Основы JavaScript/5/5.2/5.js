function random(min,max){
    let rndValue = Math.random();
    return min + ((max - min) * rndValue)
}

let result = random(10,20);
do{
    let result = random(10,20);
    console.log(result);
}while(result >= 10 && result <= 20)
