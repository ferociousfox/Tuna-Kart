function npcTravel (raceOngoing) {
  setTimeout(function () {
    if (raceOngoing) {
      var amt = Math.ceil(Math.random()*20);
      moveKart(npc1, amt);
    }
    if (raceOngoing) {
      var amt = Math.ceil(Math.random()*20);
      moveKart(npc2, amt);
    }
    npcTravel();
  }, 500)
} // function npcTravel
