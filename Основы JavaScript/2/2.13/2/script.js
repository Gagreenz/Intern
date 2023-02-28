let n = prompt("N?",10);

alert(simpleValues(n));

function simpleValues(n){
	let arr = [];
	for(let i = 2; i < n;i++){
		if(isSimple(i)) arr.push(i);
	}
	return arr.toString();
}

function isSimple(value){
	console.log(value**(1/2);
	for(let i = 2;i< value**(1/2);i++)
	{
		if(value % i == 0) return false;
	}
	return true;
}