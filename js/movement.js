function moveKart(kart, amt, raceOngoing){
  var leftValue = parseInt($(kart).css('left'));
  if (leftValue >= 500) { // check for victory postion
    clearTimeout(npcInterval);
    $("#bigT").css('left', '0');
    $("#npc1").css('left', '0');
    $("#npc2").css('left', '0');
    console.log(kart + ' wins!');
    raceOngoing = false;
  } else { // keep racing
    leftValue += amt;
    $(kart).css('left', leftValue + 'px');
  } // if leftValue
}; // function  moveKart
function npcTravel() {
  var amt = Math.ceil(Math.random()*20);
  moveKart("#npc1", amt);
  var amt = Math.ceil(Math.random()*20);
  moveKart("#npc2", amt);
} // function npcTravel
