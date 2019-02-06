function countLetters(word) {

  var lhlHouse = word.split(" ").join("");
  var outputLetters = {};
  for (var i = 0; i < lhlHouse.length; i++) {
 //console.log(i); //i represent each of the positions
 //console.log(lhlHouse[i]);
 var letter = lhlHouse[i];
    if (letter in outputLetters) {
    outputLetters[letter] += 1;

    } else {
    outputLetters[letter]= 1;
    }
  }
  return outputLetters;
}
console.log(countLetters("Lighthouse in the house"));