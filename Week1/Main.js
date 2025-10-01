const fileReader = require("fs");
let dictionary = {};
let stopWords = fileReader.readFileSync("stop_words.txt").toString().split(",");
let book = fileReader.readFileSync("pride-and-prejudice.txt").toString().match(/[a-zA-Z]+/gm).map(x => x.toLowerCase());
book.forEach(word => {
    if (!stopWords.includes(word) && word.length > 1){
        if (dictionary[word])
            dictionary[word]++;
        else
            dictionary[word] = 1;
    }
})
const allWords = Object.entries(dictionary);
allWords.sort((a, b) => b[1] - a[1]);
allWords.slice(0, 25).forEach(x => console.log(`${x[0]} - ${x[1]}`))