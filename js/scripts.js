$(document).ready(function(){
  $("body").keyup(function(){
    moveKart("#bigT");
  });
  function moveKart(kart){
    leftValue = parseInt($(kart).css('left'));
    leftValue += 10;
    $(kart).css('left', leftValue + 'px');
  };
  // function userInput(e){
  //   var keypress = e.keyCode;
  // };
});
