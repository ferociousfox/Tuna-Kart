var raceOngoing = false;
$(document).ready(function(){
  var npcInterval = undefined;
  $('button#start-race').click(startGame);
});
function winnerName(kart){
  switch (kart) {
    case '#bigT':
      return 'BIG TUUUUUNNNNAAAAA';
      break;
    case '#npc1':
      return 'Vin Diesel';
      break;
    case '#npc2':
      return 'Newman!!!';
      break;
    default:
      console.log('Name not found!!');
  }
};
