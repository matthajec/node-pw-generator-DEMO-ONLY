/*
  This isn't meant to be ran while the password generator is going, it's just a way to add new words to the list easily without duplicates. 
  Could be good for bilingual people (but your password might not be able to be l33tified), but I just use it to add new english words.
*/

const oldWordList = require("../common_words.json");

function addWordList(wordList) {
  const filteredWordList = wordList.filter((word) => {
    if (oldWordList.includes(word)) {
      return false;
    }
    return true;
  });

  const newWordList = oldWordList.concat(filteredWordList);
  fs.writeFileSync("common_words.json", JSON.stringify(newWordList));
}

/*
  Don't modify above this line!
  Just call the function "addWordList" with a JavaScript array of strings (words)
*/

// const fs = require("fs");

// file = fs.readFileSync("./newwords.txt");
// wordList = file.toString().split("\n");

// addWordList(wordList);
