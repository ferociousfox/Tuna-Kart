var raceOngoing = false;
var npcInterval = undefined;
$(document).ready(function(){
  $('button#start-race').click(function(){
    if (!raceOngoing) { // is raceOngoing false?
      raceOngoing = true;
      var currentLetterIndex = 0;
      var randomWord = getRandomWord(); console.log(randomWord);
      $("#word").text(randomWord);
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
          console.log(currentLetterCharacter.charCodeAt(0));
          console.log(e.charCode);
          if (e.charCode === currentLetterCharacter.charCodeAt(0)) {
            currentLetterIndex++; console.log(currentLetterIndex);
            moveKart("#bigT", 10); console.log('move tuna');
            $("#word").empty(); console.log('empty');
            for (var i = 0; i < currentLetterIndex; i++) {
              $("#word").append("<span>" + currentLetterCharacter + "<span>"); console.log('currentLetterCharacter');
            }
            for (var i = currentLetterIndex; i < randomWord.length; i++) {
              $("#word").append(randomWord[i]);
            }
            if (randomWord.length === currentLetterIndex + 1) {
              randomWord = getRandomWord();
              currentLetterIndex = 0;
              $("#word").text(randomWord);
            }
          }
        } // if raceOngoing
      }); // keyup
    } // if raceOngoing
  }); // button start-race
});
