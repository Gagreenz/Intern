
function Calculator()
{
    this.read = (a,b) => {
        this.first = a;
        this.second = b;
    },
    this.sum = () => {
        return Number(this.first) + Number(this.second );
    },
    this.mul = () => {
        return Number(this.first) * Number(this.second );
    }
}

let calculator = new Calculator();
calculator.read(20,48);

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());