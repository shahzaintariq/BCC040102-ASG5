// Assignment 5 > 9

dt = new Date()
function add_weeks(n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

console.log(add_weeks(2))