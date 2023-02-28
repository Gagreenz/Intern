let formatDate = (date) => {
    let now = new Date();
    const milleseconds = 1000;
    let diff = now.getTime() - date.getTime();
    if(diff < 1 * milleseconds)
        return `Прямо сейчас`
    if(diff < 60 * milleseconds)
        return `Прошло ${diff / milleseconds} секунд`
    if(diff < 60 * 60 * 1000)
        return `Прошло ${diff / (milleseconds * 60)} минут`

    let temp = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        String(date.getFullYear()),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ].map(item => item.slice(-2))

    return temp.slice(0,3).join('.') +' '+ temp.slice(3).join(':');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );