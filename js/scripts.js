$(document).ready(function(){
  var npc1 = "#npc1";
  var npc2 = "#npc2";
  var raceOngoing = false;
    $('button#start-race').click(function(){
      if (!raceOngoing) { // is raceOngoing false?
      raceOngoing = true;
      var amt = 0;
      $("body").keyup(function(e){
        if (raceOngoing) {
          var inputtedWord = [];
          function userInput(inputtedWord){
            var keypress = ;
          };
          inputtedWord = $("#input-div").val().split("");
          moveKart("#bigT", 10);
        } // if raceOngoing
      }); // keyup
      npcTravel();
    } // if raceOngoing
  }); // button start-race
});
