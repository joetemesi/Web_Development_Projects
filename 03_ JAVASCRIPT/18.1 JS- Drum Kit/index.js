function mouseClick() { // button click event listener.
    var drumClicks = document.querySelectorAll(".drum");
    for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", function test () {

        makeSound(this.innerHTML);
        animationButton(this.innerHTML);
    })
} 

}

        /*var buttonInnerHtml1 = this.innerHTML;
        makeSound(buttonInnerHtml1);
        animationButton(buttonInnerHtml1);*/

mouseClick();

function keyboardPress () {
    document.addEventListener("keypress", function (event) { ///keyboard press event listeners

        makeSound(event.key.toLowerCase());
        animationButton(event.key.toLowerCase());
    })
}
        /*var keyPress2 = event.key.toLowerCase(); 
        makeSound(keyPress2);
        animationButton(keyPress2); */
        
keyboardPress();

function makeSound (key) { ///Drum kit sounds function
    switch (key) {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio ("sounds/snare.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio ("sounds/crash.mp3");
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio ("sounds/kick-bass.mp3");
            tom7.play();
            break;

        default: console.log(buttonInnerHtml1);
            break;
    }
 }

 function animationButton (pressedKey) { //Animation function
    var pressedKeyButton = document.querySelector("." + pressedKey);
    pressedKeyButton.classList.add("pressed");

    setTimeout(function () {
        pressedKeyButton.classList.remove("pressed"); 
    }, 100);
 }
