var fireworksArray = ['img/fireworks.png','img/firework.png','img/red.png'];
function fireworks() {
  for (var i = 0; i < 30; i++) {
    $('.sky').append('<img class="fireworks" src="'+fireworksArray[i]+'">');
  }
}
