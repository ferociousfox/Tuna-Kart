function moveKart(kart, amt){
  var leftValue = parseInt($(kart).css('left'));
  if (leftValue >= 2300) {
    $('.flag').addClass('slide');
  }
  if (leftValue >= 2500) { // check for victory postion
    clearTimeout(npcInterval);
    $("#word").empty();

    $(".winner h1").text(winnerName(kart) + ' wins!');
    $(".winner h1").css('display', 'flex');
    raceOngoing = false;
  } else { // keep racing
    leftValue += amt;
    $(kart).css('left', leftValue + 'px');
  } // if leftValue
}; // function  moveKart
function npcTravel() {
  var amt = Math.ceil(Math.random()*225);
  moveKart("#npc1", amt);
  var amt = Math.ceil(Math.random()*220);
  moveKart("#npc2", amt);
} // function npcTravel
