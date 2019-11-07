// Assignment 5 >7

function isWeekEnd(enterdate){
    var date = new Date(enterdate)
    day = date.getDay();
    if(day === 0){
        return "Its weekend"
    }else{
        return `sorry wait for ${day} more days`
    }
}

console.log(isWeekEnd('Oct 12, 2019'));
console.log(isWeekEnd('Oct 27, 2019'));
console.log(isWeekEnd('Nov 27, 2019'));
