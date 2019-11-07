// assignment 5 >8

function calAge(enterdate){
    date = new Date(enterdate);
    currentDate = new Date();
    year = currentDate.getFullYear() - date.getFullYear();
    month = currentDate.getMonth() - date.getMonth();
    days = currentDate.getDay() 
    return `you are ${year} years, ${month} month and ${days} days old `
}
console.log(calAge('Sep 2, 1999'))