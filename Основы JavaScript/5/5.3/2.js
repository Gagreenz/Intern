function checkSpam(str){
    let temp = str.toLowerCase();
    if(temp.includes('viagra') || temp.includes('xxx')) return true;
    return false;
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)