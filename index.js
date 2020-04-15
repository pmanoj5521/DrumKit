var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keypress",function(event) {
      makeSound(event.key);
      buttonAnimation(event.key);
    });



    function makeSound(key) {
      switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();

          break;
        case "s":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();

          break;
        case "d":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();

          break;
        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();

          break;
        case "k":
          var k_b = new Audio("sounds/kick-bass.mp3");
          k_b.play();

          break;
        case "l":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();

          break;
        default:
          alert(buttonInnerHTML);

      }
    }




    function buttonAnimation(currentkey)
    {
       var activekey =  document.querySelector("."+currentkey);
      activekey.classList.add("pressed");
      setTimeout(function(){
        activekey.classList.remove("pressed");
      },100);

    }
