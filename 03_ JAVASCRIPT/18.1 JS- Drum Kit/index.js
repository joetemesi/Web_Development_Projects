var drumClicks = document.querySelectorAll(".drum");

for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", function () {
        //alert("Key Press.");
        /*var sound1 = new Audio ("sounds/tom-1.mp3");
        sound1.play();
        this.style.color = "white";*/
        var buttonInnerHtml1 = this.innerHTML;
        switch (buttonInnerHtml1) {
            case "w":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            default:
                break;
        }
    });
}

