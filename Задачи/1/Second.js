function BigNum(value){
    this.isNegative = value[0] == '-' ? true : false;
    this.value = this.isNegative ? value.substring(1) : value;
    this.length = this.value.length;

    this.toString = () => {
        return this.isNegative ? '-' + this.value : this.value;
    }
    this.setLength = (length) => {
        if(this.length > length) throw new Error("Нельзя установить длину меньшую, чем длина текущего значения!");
        
        while(this.length != length){
            this.value = '0' + this.value;
            this.length = this.value.length;
        }
    }
    this.isBigger = (other) => {
        if(!this.isNegative && other.isNegative) return true;
        if((this.isNegative == other.isNegative) && (this.length == other.length)){
            if(this.isNegative){
                for(let i = 0;i < this.length;i++){
                    if(Number(this.value[i]) == Number(other.value[i])) continue;
                    if(Number(this.value[i]) < Number(other.value[i])) return true;
                    else return false;
                }
                
            }
            else{
                for(let i = 0;i < this.length;i++){
                    if(Number(this.value[i]) == Number(other.value[i])) continue;
                    if(Number(this.value[i]) > Number(other.value[i])) return true;
                    else return false;
                }
            }
        }
        if(this.isNegative == true && other.isNegative == true){
            if(this.length < other.length) return true;
        }
        else if(this.isNegative == false && other.isNegative == false)
            if(this.length > other.length) return true;
        return false;
    }
    this.isBiggerAbsolute = (other) => {
        if(this.length < other.length) return false;

        if(this.length == other.length){
            for(let i = 0;i < this.length;i++){
                if(Number(this.value[i]) < Number(other.value[i])) return false;
                if(Number(this.value[i]) > Number(other.value[i])) return true;
            }
        }

        return true;
    }
    this.divideByHalf = () => {
        let carry = 0;
        let result = '';
        for(let i =0;i<this.length;i++){
            if(Number(carry + this.value[i]) % 2 != 0){
                result += Math.floor(Number(carry + this.value[i]) / 2);
                carry = String(Number(carry + this.value[i]) % 2);
            }
            else{
                result += Math.floor(Number(carry + this.value[i]) / 2);
                carry = 0;
            }
        }
        while(result[0] == '0'){
            result = result.substring(1,result.length)
        }
        this.value = result;
        this.length = result.length;
    }
}

module.exports = {
    Add(value1,value2){
        let smaller = new BigNum(value1);
        let bigger = new BigNum(value2);
    
        if(smaller.isBigger(bigger)){
            [smaller,bigger] = [bigger,smaller];
        }
        
        if(smaller.length != bigger.length){
            if(smaller.length > bigger.length){
                bigger.setLength(smaller.length);
            }else{
                smaller.setLength(bigger.length);
            }
        }
    
        let result = "";
        let carry = 0;
        let isNegative = smaller.isNegative == true && bigger.isNegative == true;
        let length = smaller.length;
    
        if(smaller.isNegative != bigger.isNegative){
            if(smaller.isBiggerAbsolute(bigger)){
                [smaller,bigger] = [bigger,smaller];
            }
            isNegative = bigger.isNegative;
            for (let i = length - 1; i >= 0; i--) {
                let value = Number(bigger.value[i]) - Number(smaller.value[i]) - carry;
                if(value < 0){
                    value += 10;
                    carry = 1;
                }
                else
                    carry = 0;
    
                result = value + result;
            }
        }
    
        if(smaller.isNegative == bigger.isNegative){
            for (let i = length - 1; i >= 0; i--) {
                let value = Number(bigger.value[i]) + Number(smaller.value[i]) + carry;
                if(value >= 10){
                    value %= 10;
                    carry = 1;
                }
                else
                    carry = 0;
    
                result = value + result;
            }
            result = carry == 1 ? carry + result : result;
        }
        while(result[0] == '0'){
            result = result.substring(1,result.length)
        }
    
        return isNegative ? "-" + result : result;
    },
    Sub(value1,value2){
        let first = new BigNum(value1);
        let second = new BigNum(value2);
    
        let isNegative;
        let result = '';
    
        if(!first.isNegative && !second.isNegative){
            let smaller,bigger;
            if(first.isBigger(second)){
                second.setLength(first.length);
                smaller = second;
                bigger = first;
                isNegative = false;
            }
            else{
                first.setLength(second.length)
                bigger = second;
                smaller = first;
                isNegative = true;
            }
    
            let carry = 0
            for(let i = bigger.length - 1;i >=0;i--){
                let value = bigger.value[i] - smaller.value[i] - carry;
                if(value < 0){
                    value += 10;
                    carry = 1;
                }
                else
                    carry = 0;
    
                result = value + result;
            }
        }
        else if(first.isNegative && second.isNegative){
            let smaller,bigger;
            if(first.isBiggerAbsolute(second)){
                second.setLength(first.length);
                smaller = second;
                bigger = first;
                isNegative = true;
            }
            else{
                first.setLength(second.length)
                bigger = second;
                smaller = first;
                isNegative = false;
            }
    
            let carry = 0
            for(let i = bigger.length - 1;i >=0;i--){
                let value = bigger.value[i] - smaller.value[i] - carry;
                if(value < 0){
                    value += 10;
                    carry = 1;
                }
                else
                    carry = 0;
    
                result = value + result;
            }
        }
        else if(first.isNegative || second.isNegative){
            isNegative = !second.isNegative;
            result = this.Add(first.value,second.value);
        }

        while(result[0] == '0'){
            result = result.substring(1,result.length)
        }
    
        return isNegative ? "-" + result : result;
    },
    Mul(value1,value2){
        let first = new BigNum(value1);
        let second = new BigNum(value2);
    
        let isNegative = first.isNegative != second.isNegative;
        let result = '';
    
        let baseOffset = ''
        for (let i = first.length - 1; i >= 0; i--) {
            let temp = "0";
            let offset = '' + baseOffset;
            for (let j = second.length - 1; j >= 0; j--) {
                let value = String(Number(first.value[i]) * Number(second.value[j])) + offset;
                offset += '0'
                temp = this.Add(temp,value);
    
            }
            result = this.Add(result,temp);
            baseOffset += '0';
        }
        
        while(result[0] == '0'){
            result = result.substring(1,result.length)
        }

        return isNegative ? "-" + result : result;
    },
    Div(value1,value2){
        let first = new BigNum(value1);
        let second = new BigNum(value2);

        let isNegative = first.isNegative != second.isNegative;

        let divider = new BigNum(first.value);
        divider.divideByHalf();    
        let max;
        
        while(!first.isBiggerAbsolute(new BigNum(this.Mul(second.value,divider.value)))){
            max = new BigNum(divider.value);
            divider.divideByHalf();
        }

        let half = new BigNum(this.Sub(max.value,divider.value));
        while(max.isBiggerAbsolute(divider) && half.value.length != 1){
            half = new BigNum(this.Sub(max.value,divider.value));
            half.divideByHalf();
            
            if(first.isBiggerAbsolute(new BigNum(this.Mul(second.value,divider.value)))){
                divider = new BigNum(this.Add(divider.value,half.value));
            }
            else{
                max = new BigNum(divider.value);
                divider = new BigNum(this.Sub(divider.value,half.value));
            
            }
        }
        if(first.isBiggerAbsolute(new BigNum(this.Mul(second.value,divider.value)))){
            while(first.isBiggerAbsolute(new BigNum(this.Mul(second.value,divider.value)))){
                divider = new BigNum(this.Add(divider.value,'1'));
            }
        }
        else{
            while(!first.isBiggerAbsolute(new BigNum(this.Mul(second.value,divider.value)))){
                divider = new BigNum(this.Sub(divider.value,'1'));
            }
        }

        if(divider.length == 0) return '0';


        if((this.Sub(first.value,this.Mul(second.value,divider.value))[0] == '-')){
            divider = new BigNum(this.Sub(divider.value,'1'));
        }

        return isNegative ? "-" + divider.value : divider.value;
    }
}