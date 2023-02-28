let array = [];
function suminput(){
    let temp;
    do{
        temp = prompt();
        if(!isNaN(temp)){
            array.push(temp);
        }
    }while(!isNaN(temp))
    
}