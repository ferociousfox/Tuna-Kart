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
