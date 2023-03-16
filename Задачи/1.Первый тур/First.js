module.exports = {
    getWordWithCapitalWord(text){
        let result;
        let capital = text.substring(0,1).toUpperCase();
        let otherWords = text.substring(1,text.length).toLowerCase();

        result = capital + otherWords;
        return result;
    },
    getWordWithCorrectSpaces(text){
        if(text.length == 0) return;
        let result = "";
        
        for(let i = 0;i< text.length;i++){
            switch(text[i]){
                case " ":
                    if(i < text.length - 1 && (text[i+1] == " " || text[i+1] == "," || text[i+1] == ".")){
                        continue;
                    }
                    result += text[i];
                    break;
                case ".":
                case ",":
                    if(i < text.length - 1 && text[i+1] != " ")
                        result += text[i] + " ";
                    else
                    result += text[i];
                    break;
                default:
                    result += text[i];
            }
        }

        return result;
    },
    getWordsCount(text){
        return text.replaceAll(/[,.-]/g,"").split(/\s+/).length;
    },
    getWordsQuantity(text){
        let result = {};
        let words = text.replaceAll(/[,.-]/g,"").toLowerCase().split(/\s+/);

        words.forEach(word => {
            if(result[word] == null){
                result[word] = 1;
            }
            else{
                result[word]++;
            }
        });

        return result;
    }
}