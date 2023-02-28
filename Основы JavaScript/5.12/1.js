let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonUser = JSON.stringify(user);

let another = JSON.parse(jsonUser);

console.log(another)