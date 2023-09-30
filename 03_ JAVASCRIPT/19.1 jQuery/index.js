/*$(document).ready(function(){  //check whether jquery lib is ready with callback function
    $("h1").css("color","red");

})*/

/*$("h1").css("color","green");*/ //add css property

$("h1").addClass("testH1"); //Added class to html element


$("h1").hasClass("testH1"); //METHOD TO CHECK WHETHER ELEMENT HAS the class

$("h1").text("TEMESI"); //Modify text

// $("img").attr("src")

$("a").attr("href","https://www.google.com");

$("h1").click(function(){ //jQuery click event listener
    $("h1").css("color","red");
})

$("button").click(function(){
    $("h1").css("color","purple");
});


$("input").keypress(function(event){
    console.log(event.key);
});