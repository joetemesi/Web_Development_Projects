var drumClicks = document.querySelectorAll(".drum");

for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", function () {
        //alert("Key Press.");
        var sound1 = new Audio ("sounds/tom-1.mp3");
        sound1.play();
    });
}

