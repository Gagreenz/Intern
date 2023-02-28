let login = prompt("Логин?",'')
const adminPassword = "123";

alert(Login());

function Login(){
	if(login == null) return "Отмена";
	if(login == "Админ")
	{
		let password = prompt("Пароль?",'')
		if(password == null) return "отмена";
		if(password == adminPassword) 
			return "Счастье вашему дому Админ!";
		esle
			return "Я вас не знаю";
	} 
	return "Я вас не знаю";
}