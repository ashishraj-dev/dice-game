// Random Number-1 from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Random Dice Image from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png";

// Random Image Source-1 from 1 to 6
var randomImageSource1 = "images/" + randomDiceImage;

// Selecting img at index 0
var image1 = document.querySelectorAll("img")[0];

// Set Attribute for Random Image Source-1
image1.setAttribute("src", randomImageSource1);




// Random Number-2 from 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random Image Source-2 from 1 to 6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set Attribute for Random Image Source-2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



// Using innerHTML to change Content

// If Player-1 Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}

// If Player-2 Wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}

// If Match is Draw
else {
    document.querySelector("h1").innerHTML = "😲 Draw! 😲";
}