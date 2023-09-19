var drumClicks = document.querySelectorAll(".drum");

for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", buttonClick);
}

function buttonClick() {
    alert("Key Press");
}