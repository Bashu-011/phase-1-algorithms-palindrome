function isPalindrome(word) {
  let lowerCase = word.toLowerCase()
  reversed = lowerCase.split('').reverse().join('');
  if (reversed === lowerCase){
    return (true)
  } else{
    return (false)
  }
}

/* 
  *START
  * isPalindrome function that takes an input 'word'
  * Concert word to lowercase and assign to string lowercase
  * use split, reverse and join method to reverse the string
  * if statements to check whether the word is a palindrome
  * END
*/

/*
  The function takes an input
  It changes it to lowercase
  It reverses it
  It checks whether it is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
