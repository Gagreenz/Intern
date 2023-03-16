const mySuperModule = require("./First");

console.log(mySuperModule.getWordWithCapitalWord("рентгеноЭЛЕКТрокардиоГРАФическИЙ"));
console.log(mySuperModule.getWordWithCorrectSpaces("Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно ."));
console.log(mySuperModule.getWordsCount("Вот пример строки, в откорой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно."));
console.log(mySuperModule.getWordsQuantity("Текст, в котором слово текст несколько раз встречается и слово тоже"));

const bigNumModule = require("./Second");
let val1 = "-208701616079635655507150530744989382275459216440522098682424547160322034069455224807976004574298"
let val2 = "893693186902376902760923796023896528750923690236582390634792365902"

console.log(BigInt(val1) + BigInt(val2) == bigNumModule.Add(val1,val2));
console.log(BigInt(val1) - BigInt(val2) == bigNumModule.Sub(val1,val2));
console.log(BigInt(val1) * BigInt(val2) == bigNumModule.Mul(val1,val2));
console.log(BigInt(val1) / BigInt(val2) == bigNumModule.Div(val1,val2));

