// assignment 5 >3

function checkpalindrome(str){
    reverse = str.split('').reverse().join("");
    if(reverse === str){
        alert('your word is palindrome');
    }else{
        alert("you word is not palindrome")
    }
}
console.log(checkpalindrome('tibit'))