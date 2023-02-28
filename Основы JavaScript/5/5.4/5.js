let array = [];
function suminput(){
    let temp;
    do{
        temp = prompt();
        if(!isNaN(temp) ){
            if(temp == '')
                temp = 0;
            array.push(Number(temp));
        }
    }while(!isNaN(temp))
    
    let result = 0;
    for(val of array){
        result += val;
    }

    return result
}