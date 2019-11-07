// Assignment 5 > 1

function fractional(x){
    if(x===0){
        return 1;
    }
    return x * fractional(x-1)
}
console.log(fractional(8))