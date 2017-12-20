function startGame(){
  if (!raceOngoing) { // is raceOngoing false?
    raceOngoing = true;
    var currentLetterIndex = 0;
    var randomWord = getRandomWord();
    var sound = new Howl({
      src: ['car+start3.mp3']
    });
    sound.play();
    $(".winner h1").hide();
    $("#word").text(randomWord.join(""));
    npcInterval = setInterval(npcTravel, 500);
    $("body").keypress(function(e){
      if (raceOngoing) {
        var currentLetterCharacter = randomWord[currentLetterIndex];
        if (e.charCode === currentLetterCharacter.toLowerCase().charCodeAt(0)) {
          currentLetterIndex++;
          moveKart("#bigT", 10);
          if (raceOngoing) {
            if (randomWord.length === currentLetterIndex) { // last letter of word?
              randomWord = getRandomWord();
              currentLetterIndex = 0;
              $("#word").text(randomWord.join(""));
            } else { // if not last letter of word
              $("#word").empty();
              for (var i = 0; i < currentLetterIndex; i++) {
                $("#word").append("<span>" + randomWord[i] + "<span>");
              }
              for (var i = currentLetterIndex; i < randomWord.length; i++) {
                $("#word").append(randomWord[i]);
              }
            }
          }
        }
      } // if raceOngoing
    }); // keyup
  } // if raceOngoing
}
