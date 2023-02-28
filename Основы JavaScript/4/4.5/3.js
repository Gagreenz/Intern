function Accumulator(startValue){
    this.value = startValue;
    this.read = (addedValue) => {
        this.value += addedValue;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(100); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(19); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений