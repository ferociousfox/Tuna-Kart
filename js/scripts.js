$(document).ready(function(){
  var raceOngoing = false;
  var npcInterval = undefined;
  $('button#start-race').click(function(){
    startGame(raceOngoing);
  });
});
