const list =['SWEET', 'SWEET', 'SWEET', 'SWEET', 'SWEET', 'SWEET', 'INTERPOLATE', 'COOL', 'COOL', 'COOLCOOL', 'COOLCOOL', 'NICE', 'AWESOME', 'TOTALLY', 'ANYQUESTIONS', 'NOTHINGTOREPORT', 'SCOPE', 'FUNCTION', 'VARIABLE'];

//
// -function random() for grabbing words from list randomly
//
// -listener to call back random() to bring up a word on screen
//   (split into a letter array)
//
// -use function typing() that:
// 1. stores what's being typed in by user and checks against the random word:
//   use a for loop, starting at index 0 (or lastTypedLetter?) of what's typed, checks if input letter matches the letter in random word
//     --if yes, change visual on correct letter, run loop again and move over one index in random word and wait for next inputted letter to check
//
// 2. move kart with moveKart(kart, 10) for each letter;



  var randomWord = function() {
    var selectedWord = list[Math.floor(Math.random() * list.length)];
    selectedWord.split("");

  };
