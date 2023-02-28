let first = prompt("Первое?",'')
let second = prompt("Второе?",'')

alert(min(first,second));

function min(val1,val2){
	console.log(val1);
	return val1 < val2 ? val1 : val2;
}