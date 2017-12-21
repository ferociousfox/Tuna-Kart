var raceOngoing = false;
$(document).ready(function(){
  var npcInterval = undefined;
  $('button#start-race').click(startGame);
});
function winnerName(kart){
  switch (kart) {
    case '#bigT':
      return 'BIG TUNA';
      break;
    case '#npc1':
      return 'Vin Diesel';
      break;
    case '#npc2':
      return 'Newman!!?';
      break;
    default:
      console.log('Name not found!!');
  }
};
$(document).keypress(function(e){
  if (raceOngoing) {
    var currentLetterCharacter = randomWord[currentLetterIndex];
    if (e.charCode === currentLetterCharacter.toLowerCase().charCodeAt()) {
      console.log(randomWord);
      console.log(currentLetterIndex);
      console.log(currentLetterCharacter);
      currentLetterIndex++;
      moveKart("#bigT", 60);
      if (raceOngoing) {
        if (randomWord.length === currentLetterIndex) { // last letter of word?
          randomWord = getRandomWord();
          currentLetterIndex = 0;
          $("#word").text(randomWord.join(""));
        } else { // if not last letter of word
          $("#word").empty();
          for (var i = 0; i < currentLetterIndex; i++) {
            $("#word").append("<span>" + randomWord[i] + "<span>");
          }
          for (var i = currentLetterIndex; i < randomWord.length; i++) {
            $("#word").append(randomWord[i]);
          }
        }
      }
    }
  } // if raceOngoing
}); // keyup
