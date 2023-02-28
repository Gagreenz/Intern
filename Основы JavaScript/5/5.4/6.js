function getMaxSubSum(arr){
    let max = 0;
    let temp = 0;
    for(let value of arr){
        temp += value;
        if(temp < 0){
            temp = 0;
            continue;
        } 
        if(temp > max){
            max = temp;
        }
    }

    return max;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0