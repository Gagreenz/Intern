let getSecondsToTomorrow = () => {
    let now = new Date;
    return ((new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1)) - now) /1000
}

console.log(getSecondsToTomorrow());