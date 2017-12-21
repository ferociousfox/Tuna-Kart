var currentLetterIndex = 0;
var randomWord = [];
function getRandomSong() {
  var selectedSong = song[Math.floor(Math.random() * song.length)];
  return selectedSong;
};

const song = ['bananaphone.mp3', 'evil9.mp3', 'whacked.mp3'];
var selectedSong = new Howl({
  src: [getRandomSong()],
  autoplay: true
}); 
// const song =;
function startGame(){
  this.blur();
  if (!raceOngoing) { // is raceOngoing false?
    raceOngoing = true;
    currentLetterIndex = 0;
    randomWord = getRandomWord();
    var rev = new Howl({
      src: ['car+start3.mp3']
    });
    rev.play();
    selectedSong.play();
    $('.flag').removeClass('slide');
    $("#bigT, #npc2, #npc1").addClass('.transition');
    $("#bigT, #npc2, #npc1").css('left', '0');
    $(".winner h1").hide();
    $("#word").text(randomWord.join(""));
    npcInterval = setInterval(npcTravel, 500);
  } // if raceOngoing
  selectedSong.stop();
}
