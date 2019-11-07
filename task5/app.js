// Assignment 5 >5

var amount = prompt("enter amount in hundreds to withdrwal");
var fifttyamount = (amount[1] + amount[2])

function withdraw(){
    if(amount < 100){
        return "enter amount in hundreds"
    }else if(fifttyamount < 50){
        return `you have ${+amount[0]} hundred notes ${amount[1]} ten notes`
    }else{
        return `you have ${+amount[0]} hundred notes 1 fifty notes ${+amount[1] - 5} ten notes`
    }
}
console.log(withdraw())