$(document).ready(function(){
  var npc1 = "#npc1";
  var npc2 = "#npc2";
  var raceOngoing = false;
  $("body").keyup(function(){
    moveKart("#bigT", 10);
  });
  function moveKart(kart, amt){
    leftValue = parseInt($(kart).css('left'));
    leftValue += amt;
    $(kart).css('left', leftValue + 'px');
  };
  // function userInput(e){
  //   var keypress = e.keyCode;
  // };
  $('button#start-race').click(function(){
    var travel = 0;
    var amt = 0;
    function npc1Travel () {
       setTimeout(function () {
         amt = Math.ceil(Math.random()*20);
         moveKart(npc1, amt);
         amt = Math.ceil(Math.random()*20);
         moveKart(npc2, amt);
          travel++;
          if (travel < 50) {
            npc1Travel();
          }
       }, 400)
    }
    npc1Travel();
    // for (var i = 0; i < 15; i++) {
    //   var moveNPC1 = setInterval(moveKart(npc1), 1000);
    // }
  });
});
