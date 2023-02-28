function inputHandler(){
    let result;
    do{
        result = prompt();
    }while(isNaN(result))

    return result;
}