function palindrome(input) {
  // remove special characters, spaces and make lowercase
  var lowercase = input.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  // reverse removeChar for comparison
  var checkPalindrome = lowercase.split('').reverse().join('');

  // Check to see if input is a Palindrome
   return (lowercase === checkPalindrome);
}

var submit = document.getElementById('submit');
var image = document.getElementById('palindromeImage');

submit.addEventListener('click',()=>{
  var input = document.getElementById('input').value;
  if(palindrome(input) == true){
    image.src="palindrome2.jpeg";
  } else {
    image.src="palindrome3.jpeg"; }
  console.log(palindrome(input));
});
