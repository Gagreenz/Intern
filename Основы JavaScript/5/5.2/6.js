function randomInteger(min,max){
    return Math.floor(min + Math.random() * (max-min));

}

console.log(randomInteger(0,5));
console.log(randomInteger(100,102));
console.log(randomInteger(-5,0));