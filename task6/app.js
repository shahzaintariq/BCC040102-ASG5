// Assignment 5 >6

mirror = [1,2,3,4,];
function mirrorArr(mirror){
    reverses = mirror.reverse('')
    return Array(mirror + ","  + reverses );
}
console.log(mirrorArr(mirror))