const pattern = `name-contains-fd&price-=2&quantity->5&description-ends-abc`;
const pattern2 = `name-starts-fd&quantity-=5`;

class Product{
    constructor(name,price,quantity,description){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    
}

let products = [
    new Product("fdname",121,63,"Блаблабла"),
    new Product("fd",2,5,"sggsdabc"),
    new Product("Просто продукт",2,325,"В этом продукте нет ничего необычного"),
    new Product("Jojo",1543,234,"Это описание."),
    new Product("Sveta",11,65,"Це света"),
    new Product("Pivozavrfd",2,3,"abc")
];

function getByFilter(filterString) {
    let filters = getFilters(filterString);
    let filtredArray = products;

    filters.forEach(filter => {
        switch(filter.type){
            case 'name':
                filtredArray = filtredArray.filter(p => stringFind(p.name,filter))
                break;
            case 'price':
                filtredArray = filtredArray.filter(p => numFind(p.price,filter))
                break;
            case 'quantity':
                filtredArray = filtredArray.filter(p => numFind(p.quantity,filter))
                break;
            case 'description':
                filtredArray = filtredArray.filter(p => stringFind(p.description,filter))
                break;
        }
    })
    console.log(filtredArray);
}

function stringFind(string,filter){
    let op = filter.operator;
    let key = filter.key;
    switch(op){
        case 'ends':
            return string.endsWith(key);
        case 'starts':
            return string.startsWith(key);
        case 'contains':
            return string.includes(key);
    }
}
function numFind(num,filter){
    let op = filter.operator;
    let key = filter.key;
    switch(op){
        case '>':
            return num < key;
        case '<':
            return num > key;
        case '<=':
            return num >= key;
        case '>=':
            return num <= key;
        case '!=':
            return num != key;
        case '=':
            return num == key;
    }
}

function getFilters(filterString){
    let types = []
        
    filterString.split('&')
        .forEach(item => {
            let template = item.split('-');
            let filter;
            if(template.length != 3){
                let temp = template[1];
                template[1] = temp[0];
                template[2] = temp.substring(1,temp.length);
            }

            filter = {  
                type: template[0],
                operator:template[1],
                key:template[2]
            }

            types.push(filter);
    });

    return types;
}
