var drumClicks = document.querySelectorAll(".drum");

for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", function () {
        alert("Key Press.");
    });
}

