const list =['SWEET', 'SWEETSWEET', 'SWEEEEET', 'HAVE A GOOD DAY', 'INTERPOLATE', 'COOL', 'COOLCOOL', 'COOLCOOLCOOL', 'NICE', 'AWESOME', 'TOTALLY', 'ANY QUESTIONS', 'NOTHING TO REPORT', 'SCOPE', 'FUNCTION', 'VARIABLE', 'TUBULAR', 'RADICAL', 'GOLDEN DINO'];

  function getRandomWord() {
    var selectedWord = list[Math.floor(Math.random() * list.length)];
    return selectedWord.split("");
  }
