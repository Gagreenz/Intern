let getWeekDay = (date) => {
    let temp = {
        0:'ВС',
        1:'ПН',
        2:'ВТ',
        3:'СР',
        4:'Т',
        5:'ПТ',
        6:'СБ',
    }
    return temp[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
-console.log( getWeekDay(date) );  