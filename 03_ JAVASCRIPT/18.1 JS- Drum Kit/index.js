var drumClicks = document.getElementsByClassName("drum");

for (var i = 0; i < drumClicks.length; i++) {
    drumClicks[i].addEventListener("click", buttonClick);
}

function buttonClick() {
    alert("bazuuu");
}