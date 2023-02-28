let getSecondsToday = () => {
    let now = new Date;
    return (now - (new Date(now.getFullYear(),now.getMonth(),now.getDate()))) /1000
}

console.log(getSecondsToday());