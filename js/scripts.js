var npc1 = "#npc1";
var npc2 = "#npc2";
var raceOngoing = false;
$(document).ready(function(){
  $('button#start-race').click(function(){
    if (!raceOngoing) { // is raceOngoing false?
      raceOngoing = true;
      var currentLetterIndex = 0;
      var randomWord = getRandomWord(); console.log(randomWord);
      npcTravel();
      $("body").keyup(function(e){
        if (raceOngoing) {
          var currentLetterCharacter = randomWord[currentLetterIndex];
          if (e.keyCode === currentLetterCharacter.keyCode) {
            $("#input-div").append(currentLetterCharacter);
            moveKart("#bigT", 10);
          }
        } // if raceOngoing
      }); // keyup
    } // if raceOngoing
  }); // button start-race
});
