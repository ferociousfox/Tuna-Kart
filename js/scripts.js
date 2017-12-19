var raceOngoing = false;
var npcInterval = undefined;
$(document).ready(function(){
  $('button#start-race').click(function(){
    if (!raceOngoing) { // is raceOngoing false?
      raceOngoing = true;
      var currentLetterIndex = 0;
      var randomWord = getRandomWord(); console.log(randomWord);
      npcInterval = setInterval(npcTravel, 500);
      function npcTravel() {
        var amt = Math.ceil(Math.random()*20);
        moveKart("#npc1", amt);
        var amt = Math.ceil(Math.random()*20);
        moveKart("#npc2", amt);
      } // function npcTravel
      $("body").keyup(function(e){
        if (raceOngoing) {
          var currentLetterCharacter = randomWord[currentLetterIndex];
          if (e.keyCode === currentLetterCharacter.keyCode) {
            $("#input-div").append(currentLetterCharacter);
            moveKart("#bigT", 10);
            if (randomWord.length === currentLetterIndex + 1) {
              randomWord = getRandomWord();
            }
          }
        } // if raceOngoing
      }); // keyup
    } // if raceOngoing
  }); // button start-race
});
