function moveKart(kart, amt){
  leftValue = parseInt($(kart).css('left'));
  if (leftValue >= 350) { // check for victory postion
    raceOngoing = false;
    npcTravel(raceOngoing);
    $("#bigT").css('left', '0');
    $("#npc1").css('left', '0');
    $("#npc2").css('left', '0');
    alert(kart + ' wins!');
  } else { // keep racing
    leftValue += amt;
    $(kart).css('left', leftValue + 'px');
  } // if leftValue
}; // function  moveKart
