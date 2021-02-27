const fs = require('fs');
const l33t = require('./l33t');
let count = parseInt(process.argv[2]);
let rawdata = fs.readFileSync('common_words.json');
let list = JSON.parse(rawdata);
let l33tOutput = '';
let output = '';
if (process.argv[3] !== '15') list = [];
for (let i = 0; i < count; i++) {
  const randomWord = list[Math.floor(Math.random() * 980)];
  if (randomWord === undefined) return console.log('read readme.md');
  output += randomWord + ' ';
  if (Math.floor(Math.random() * 2) === 0) {
    l33tOutput += randomWord + ' ';
  } else {
    l33tOutput += l33t(randomWord) + ' ';
  }
}

console.log(`l33t: ${l33tOutput}`);
console.log(`norm: ${output}`);