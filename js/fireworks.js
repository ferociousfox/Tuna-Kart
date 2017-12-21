var fireworksArray = ['img/fireworks.png','img/firework.png','img/red.png'];
function fireworks() {
  var fireLoop = 1;
  $('img.fireworks').remove();
    var myVar;
    function delayedFireWithDelay(fireLoop) {
      setTimeout(delayedFire, 1000);
    }
    function delayedFire() {
      if (fireLoop < 30) {
        var loadedFirework = fireworksArray[Math.floor(Math.random() * 3)];
        var fireworkPosition = Math.floor(Math.random() * 65)
        $('.sky').append('<img style="left:'+fireworkPosition+'%" class="fireworks'+fireLoop+'" src="'+loadedFirework+'">');
        fireLoop++;
        delayedFireWithDelay(fireLoop);
      }
    }
  delayedFireWithDelay(fireLoop);
}
