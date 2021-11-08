function isPalindrome(x) {
    // your code here
  const str = x.toLowerCase() 
  const length = str.length - 1
  for(let i = 0; i < str.length;i++){
    if(str[i]!==str[length-i]){
      return false
    }
   }
    return true
  }
  
  
  // {
    // your code here
   //   return x.toLowerCase() == x.split('').toLowerCase().reverse().join('')
  
  //}