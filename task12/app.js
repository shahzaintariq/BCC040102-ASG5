// Assignment 5 > 12
function playGame(){
i=0
while(i<3){
var randomNum = Math.floor((Math.random() * 99) +1);
var guessNum = +prompt("Guess number");

function incorrectNum(){
    if(guessNum !== randomNum){
        alert("incorrect! please try again");
    }
}

function correctNum(){
    if(guessNum === randomNum){
        alert("you are right you won")
    }
}

console.log(incorrectNum())
console.log(correctNum())
i++
}
}
console.log(playGame())

var ask = prompt("You do want to play again say yes/no");
if(ask === "yes"){
    console.log(playGame())
}else if(ask === "no"){
    alert("Thanks for playing")
}

