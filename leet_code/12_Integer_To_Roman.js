// It short circuits the page's HTML form and fires off a handbuilt JS function.
window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printConvertedValue,false)
}

// This is the function that actually adds the output to the DOM. Don't change
// this!
var printConvertedValue = function(event) {
  event.preventDefault()
  var number = this.number.value
  var outputDiv = document.querySelector('.output')
  outputDiv.innerText = numeralConverter(number)
}

// numeralConverter takes a string that looks like a number as an input, e.g. '111'.
// numeralConverter should output a string of characters corresponds to a Roman Numeral, e.g. 'XXVI'
var numeralConverter = function(numString) {
  numString.split("").length
}

// my helper functions go here!
var numeralConverter = function(numString) {
  var result = "";
  var key = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var value = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  for(var i=0; i < key.length; i++) {
    while ( numString > (numString % value[i])){
      result += key[i];
      numString -= value[i];
    }
  }
  return result;
};
