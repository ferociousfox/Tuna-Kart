$(document).ready(function(){
  var npc1 = "#npc1";
  var npc2 = "#npc2";
  var raceOngoing = false;
  function moveKart(kart, amt){
    leftValue = parseInt($(kart).css('left'));
    if (leftValue >= 50) { // check for victory postion
      raceOngoing = false;
      $("#bigT").css('left', '0');
      $("#npc1").css('left', '0');
      $("#npc2").css('left', '0');
      alert(kart + ' wins!');
    } else { // keep racing
      leftValue += amt;
      $(kart).css('left', leftValue + 'px');
    } // if leftValue
  }; // function  moveKart
  // function userInput(e){
  //   var keypress = e.keyCode;
  // };
    $('button#start-race').click(function(){
      if (!raceOngoing) {
      raceOngoing = true;
      var amt = 0;
      $("body").keyup(function(){
        if (raceOngoing) {
          moveKart("#bigT", 10);
        } // if raceOngoing
      }); // keyup
      function npcTravel () {
        setTimeout(function () {
          if (raceOngoing) {
            amt = Math.ceil(Math.random()*20);
            moveKart(npc1, amt);
          }
          if (raceOngoing) {
            amt = Math.ceil(Math.random()*20);
            moveKart(npc2, amt);
          }
          npcTravel();
        }, 500)
      } // function npcTravel
      npcTravel();
      // for (var i = 0; i < 15; i++) {
      //   var moveNPC1 = setInterval(moveKart(npc1), 1000);
      // }
    } // if raceOngoing
  }); // button start-race
});
