const wordList = require("./common_words.json");
const rand = require("./lib/rand");

(async function genRandomPassword() {
  const resultWordList = [];

  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    const randNum = await rand(wordList.length);
    const randIndex = Math.round(randNum);
    resultWordList[i] = wordList[randIndex];
  }

  console.log(
    `Password Entropy: ${Math.log2(
      Math.pow(wordList.length, parseInt(process.argv[2]))
    )}`
  );
  console.log(resultWordList);
})();
