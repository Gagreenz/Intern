let getLastDayOfMonth = (year, month) =>{
    if(month == 1){
        if(year % 4 == 0)
            return 29;
        else 
            return 28;
    }
    if(month % 2 == 1) return 31;
    else return 30;
}

console.log(getLastDayOfMonth(2012, 3));