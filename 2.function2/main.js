function palindrome(message){
    let temp="";
    for(let i=message.length-1;i>=0;i--){
        temp+=message.charAt(i);
    }
    //console.log(temp==message);
    return temp==message;
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true