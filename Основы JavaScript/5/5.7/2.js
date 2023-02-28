let aclean = (arr) =>{
    let result = new Map();
    let anagrams = arr.slice();

    anagrams = anagrams.map(element => 
        result.set(Array.from(element.toLowerCase()).sort().join(''),element)
    ); 
    
    return Array.from(result.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"