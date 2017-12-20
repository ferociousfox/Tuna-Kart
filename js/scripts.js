var raceOngoing = false;
var npcInterval = undefined;
$(document).ready(function(){
  $('button#start-race').click(function(){
    if (!raceOngoing) { // is raceOngoing false?
      raceOngoing = true;
      var currentLetterIndex = 0;
      var randomWord = getRandomWord(); console.log(randomWord);
      $("#word").text(randomWord.join(""));
      npcInterval = setInterval(npcTravel, 500);
      function npcTravel() {
        var amt = Math.ceil(Math.random()*20);
        moveKart("#npc1", amt);
        var amt = Math.ceil(Math.random()*20);
        moveKart("#npc2", amt);
      } // function npcTravel
      $("body").keypress(function(e){
        if (raceOngoing) {
          var currentLetterCharacter = randomWord[currentLetterIndex];
          if (e.charCode === currentLetterCharacter.toLowerCase().charCodeAt(0)) {
            currentLetterIndex++;
            moveKart("#bigT", 10);
            $("#word").empty();
            for (var i = 0; i < currentLetterIndex; i++) {
              $("#word").append("<span>" + randomWord[i] + "<span>");
            }
            for (var i = currentLetterIndex; i < randomWord.length; i++) {
              $("#word").append(randomWord[i]);
            }
            if (randomWord.length === currentLetterIndex) {
              randomWord = getRandomWord();
              currentLetterIndex = 0;
              $("#word").text(randomWord.join(""));
            }
          }
        } // if raceOngoing
      }); // keyup
    } // if raceOngoing
  }); // button start-race
});
