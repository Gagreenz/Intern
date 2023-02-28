function Calculator(){
    this.methods = []
    this.calculate = (exp) =>{
        let temp = exp.split(" ");
        let method = this.methods.find(m => m.name == temp[1]).func;
        return method(+temp[0],+temp[2]);
    }
    this.addMethod = (name,func) =>{
        this.methods.push({
            name,
            func
        })
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8f

result = powerCalc.calculate("2 - 3");
console.log( result ); // -1f

result = powerCalc.calculate("22 + 3");
console.log( result ); // 25f