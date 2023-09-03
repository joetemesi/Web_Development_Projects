var beer = 99;
var beerLeft = 98;

function myBeer(beer, beerLeft) {
    while (beer > 0 && beerLeft >= 0) { //loops until no of beers and bottles < 1
        if (beerLeft < 1) {
            console.log(beer + " bottles of beer, " + beer + " bottles of beer.");
            console.log(beer + " bottles of beer, Take 1 down, pass it around, no more bottles of beer on the wall.");   
        }   else {
            console.log(beer + " bottles of beer, " + beer + " bottles of beer.");
            console.log(beer + " bottles of beer, Take 1 down, pass it around " + beerLeft + " bottles of beer on the wall.");
        }
        
        beer--;
        beerLeft--;
    }
}

myBeer(beer, beerLeft);
