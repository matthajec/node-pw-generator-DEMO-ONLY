function l33t(text) {
  return text.replace(/l|i/gi, '1').replace(/e/gi, '3').replace(/a/gi, '4').replace(/s/gi, '5').replace(/o/gi, '0');
}

module.exports = l33t;