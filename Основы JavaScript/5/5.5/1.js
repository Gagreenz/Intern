function camelize(str){
    return str.split('-')
        .filter(item => item.length != 0)
        .map((item) => 
            item[0].toUpperCase() + item.slice(1))
        .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));