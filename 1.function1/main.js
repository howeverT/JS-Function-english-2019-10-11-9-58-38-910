function reverseString(message){
    let result="";
    for(let i=message.length-1;i>=0;i--){
        result+=message.charAt(i);
    }
    //console.log(result);
    return result;
  }
  reverseString('hello'); // should return 'olleh'