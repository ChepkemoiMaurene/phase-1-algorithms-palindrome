function isPalindrome(word){
    if(typeof word === 'number'){
      return word === reverseInt(word)
    }
    return word === reverseString(word)
  }

function reverseString(word){
    return word.split('').reverse().join('')
  }
  function reverseInt(word){
    return parseInt(word.toString().split('').reverse().join(''))
  }
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
