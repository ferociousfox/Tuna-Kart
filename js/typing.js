const list =['SWEET', 'SWEETSWEET', 'TIGHT', 'HAVE A GOOD DAY', 'INTERPOLATE', 'COOL', 'COOLCOOL', 'GIT-PAIR-COMMIT', 'COOLCOOLCOOL', 'NICE', 'AWESOME', 'TOTALLY', 'ANY QUESTIONS', 'LOGIC', 'SCOPE', 'FUNCTION', 'VARIABLE', 'WHITEBOARDING', 'TUBULAR', 'RADICAL', 'GOLDEN DINO'];

  function getRandomWord() {
    var selectedWord = list[Math.floor(Math.random() * list.length)];
    return selectedWord.split("");
  }
