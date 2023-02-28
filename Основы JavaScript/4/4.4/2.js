let calculator = {
    read(val1,val2){
        this.first = val1;
        this.second = val2;
    },
    sum(){
        return Number(this.first) + Number(this.second );
    },
    mul(){
        return Number(this.first) * Number(this.second );
    }
};
  
calculator.read(25,4);
console.log(calculator.sum());
console.log(calculator.mul());