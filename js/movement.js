function moveKart(kart, amt){
  var leftValue = parseInt($(kart).css('left'));
  if (leftValue >= 150) { // check for victory postion
    clearTimeout(npcInterval);
    $("#word").empty();
    $("#bigT").css('left', '0');
    $("#npc1").css('left', '0');
    $("#npc2").css('left', '0');
    $(".winner h1").text(winnerName(kart) + ' wins!');
    $(".winner h1").css('display', 'flex');
    raceOngoing = false;
  } else { // keep racing
    leftValue += amt;
    $(kart).css('left', leftValue + 'px');
  } // if leftValue
}; // function  moveKart
function npcTravel() {
  var amt = Math.ceil(Math.random()*20);
  moveKart("#npc1", amt);
  var amt = Math.ceil(Math.random()*22);
  moveKart("#npc2", amt);
} // function npcTravel
