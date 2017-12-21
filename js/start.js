var currentLetterIndex = 0;
var randomWord = [];
function startGame(){
  this.blur();
  if (!raceOngoing) { // is raceOngoing false?
    raceOngoing = true;
    currentLetterIndex = 0;
    randomWord = getRandomWord();
    var sound = new Howl({
      src: ['car+start3.mp3']
    });
    sound.play();
    $('.flag').removeClass('slide');
    $("#bigT, #npc2, #npc1").addClass('.transition');
    $("#bigT, #npc2, #npc1").css('left', '0');
    $(".winner h1").hide();
    $("#word").text(randomWord.join(""));
    npcInterval = setInterval(npcTravel, 500);
  } // if raceOngoing
}
