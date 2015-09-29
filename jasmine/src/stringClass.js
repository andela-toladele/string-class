String.prototype.hasVowels = function() {

  //Tests if string contains any of 'a,e,i,o,u'
  //Returns true if yes, else returns false
  return /[aeiou]/.test(this);
}

//Replaces any upper case letter found in a string
//with lower case equivalent
String.prototype.toUpper = function() {

  //Gets the ascii code of matched upper case alphabet, adds 32 from it to
  //get ascii code of equivalent lower case alphabet and converts it to alphabet
  return this.replace(/[a-z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) - 32);
  });

}

//Replaces any lower case letter found in a string
//with upper case equivalent
String.prototype.toLower = function() {

  //Gets the ascii code of matched lower case alphabet, subtracts 32 from it to
  //get ascii code of equivalent upper case alphabet and converts it to alphabet
  return this.replace(/[A-Z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) + 32);
  });
}

//Returns the first character of a string in upper case
String.prototype.ucFirst = function(){

  //Matches the first word that start a string and returns it in upper case
  return this.replace(/^\w/, function(x){
    return x.toUpperCase();
  })
}

//Tests if a string ends with '?'
//Returns true if yes, else return false
String.prototype.isQuestion = function() {

  return /\?$/.test(this);
}

//Return array of words in a string
String.prototype.words = function() {

  //The pattern matches white space which breaks word
  var pattern = /\s+/g;

  //Splits a string into an array with white space as delimiter
  return this.split(pattern);
}

//Returns the length of array of words in a string
String.prototype.wordCount = function() {
  return this.words().length;
}

//Converts a number to currency mode
String.prototype.toCurrency = function() {

  //Macthes any digit(and remembers it) that is followed by three digits or (x * 3) digits
  //where x is a positive integer, then followed by '.'
  var pattern = /(\d)(?=(\d{3})+(?=\.))/g

  //Replaces the matched digit with same digit followed by ','
  return this.toString().replace(pattern, "$1,");
};

//Replaces all "," with ""
String.prototype.fromCurrency = function() {
  return Number(this.replace(/,/g, ""));
}
