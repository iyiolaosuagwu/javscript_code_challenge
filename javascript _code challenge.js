// Question 1:
// Write a function called isSquare() that takes a number and tells if the number is a perfect square
// or not.

var isSquare = function (n) {
  var  checkSquare = n + n > 0 && Math.sqrt(n) % 1 === 0;
    return n + " is a perfect Square = " + checkSquare    
};
isSquare(27);
// Test Exampls:
// /isSquare(-12) // => false
// isSquare( 5) // => false
// isSquare( 9) // => true
// isSquare(25) // => true
// isSquare(27) // => false

// Question 2
// Write a function that takes a list of values and returns a dictionary in the format below
// Sample Input:
// [“book”, 3, “pin”, 3.5]
// Sample Output
// {
// string :[“book”, “pin”],
// number:[3,5]
// }

var stringFormat = function (input){
    
    var filteredObject = {};
    var strings = [];
    var numbers = [];
    
    
    input.forEach((inp) => {
      if(typeof inp === 'string') {
        strings.push(inp)
      }
    })

    input.forEach((inp) => {
      if(typeof inp === 'number') {
        numbers.push(inp)
      }
    })
    
    filteredObject.string = strings
    filteredObject.number = numbers
    return filteredObject
}
var result = stringFormat(['book', 3, 'pin', 3.5])
console.log(result)

// Question 3
// Write a function called “getEncryptedText()” that takes a random string and generates a
// password out of it and another function called “getDecryptedText()” that takes the output of the
// “getEncryptedText()” function and returns the original string.

var Encoder = function(value){
  
    // this function encodes the value
    Encoder.prototype.getEncryptedText = function(){
        return btoa(value)     
    }
    
    // this function decodes and encoded the value
    Encoder.prototype.getDecryptedText = function(){
      return atob(btoa(value))   
    }
}
// creating a new instance of the Encoder...
var encoder = new Encoder('Andela is Awesome');
console.log(encoder.getEncryptedText())
console.log(encoder.getDecryptedText())
