"use strict";

var Ciphers = function (){

	const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 	const numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];


	/**
	* Start public functions
	**/

	/**
	* Caesar Cipher takes in a word and shifts all the letters a certain number of times to return an ecrpyted word.
	* 
	* @alias module:ciphers~ciphers/caesarCipher
	* @param {word : String, shift : Number, shiftLeft, boolean}
	* @returns {encodedWord: String} Returns the new endocded word
	*/
	var caesarCipher = function(word, shiftCount, shiftLeft){
		const maxAlphabet = 25; // index starts at 0

		let encodedWord = ""; 	// String
		let letter = ""; 	// String
		let encodedLetter = ""; // String
		let index = 0;		// Number
		let encodedIndex = 0;	// Number


		// check user params
		if(word == 'undefined'){
			throw new Error('word to encrypt is empty');
		}else if(shiftCount == 'undefined'){
			throw new Error('shiftCount is undefined');
		}else if(shiftLeft == 'undefined'){
			throw new Error('shiftLeft is undefined');
		}

		// seperate each letter
		let letterArray = word.split('');
		
		// find the index of the letter in the alphabet
		while (letterArray.length > 0){

			// get first letter of word
			letter = letterArray[0];
			
			// get index of letter
			index = alphabet.indexOf(letter);

			//check for large shiftCounts
			if(shiftCount > maxAlphabet){
				shiftCount = shiftCount % 26;
			}else if(shiftCount < 0){
				throw new Error('shiftCount is not allowed to be negative');
			}

			if(shiftLeft){
				// apply the left shift to the index
				encodedIndex = index - shiftCount;
			}else {
				// apply the right shift to the index
				encodedIndex = index + shiftCount;
			}
			
			//edge case wrapping alaphabet
			if (encodedIndex < 0 ){
				encodedIndex = maxAlphabet + encodedIndex;
			}else if(encodedIndex > maxAlphabet){
				encodedIndex = encodedIndex - maxAlphabet;
			}

			// take the index and shift to get the new letter
			encodedLetter = alphabet[encodedIndex];

			// add new letter to encodedWord
			encodedWord = encodedWord + encodedLetter;

			// remove first letter of letterArray
			letterArray.shift();
		}

		// return encoded word
		return encodedWord;
	};

	/**
	* Atbash Cipher takes in a substitue cipher with a specific key where the letters of the alphabet are reversed
	* 
	* @alias module:ciphers~ciphers/caesarCipher
	* @param {word: String} Takes in a string
	* @returns {encodedWord: String} Returns the new endocded word
	*/
	var atbashCipher = function(word){
		var reverseAlphabet = alphabet.slice(0,26);
		reverseAlphabet = reverseAlphabet.reverse();

		// check user input
		if(word == 'undefined'){
			throw new Error('word to encrypt is empty');
		}

		// seperate each letter
		let letterArray = word.split('');

		// use the map function to find the index of each letter then find same index in reverseAlphabet
		var encryptedArray = letterArray.map(function(currentLetter){
			var letterIndex = alphabet.indexOf(currentLetter);
			return reverseAlphabet[letterIndex];

		});

		// make array a string
		var encodedWord = encryptedArray.join();

		// remove the commas from the word
		encodedWord = encodedWord.replace(/,/g, '');

		// return encoded word
		return encodedWord;
	};


	var substituteCipher = function (word, key){
		var encryptedArray = [];
		var indexedArray = [];
		var encryptedText = '';

		if(word!=''){
			if(key == ''){
				var key = generateKey();
			}
			//decrypt
			encryptedArray = switchLetters(word, key);
			encryptedText = encryptedArray.toString();
			return encryptedText;
		}
		// word was empty
		return '';
	};

	/**
	* End public functions
	**/


	/**
	* Start private functions
	**/
	

	/**
	* Helper function for shuffling array. 
	* 
	* @alias module:ciphers~ciphers/shuffle
	* @param {array: Array of Numbers} Takes in an array of numbers
	* @returns {array: Array of Numbers} Returns the shuffled array
	*/
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	/**
	* Helper function for substituting letters. 
	* 
	* @alias module:ciphers~ciphers/switchLetters
	* @param {array: Array of Numbers} Takes in an array of numbers
	* @returns {array: Array of Numbers} Returns the encrypted array of letters
	*/
	function switchLetters(word, key){
		//console.log('encryptedWord= ' + word)
		//console.log('key= ' +JSON.stringify(key))
		let letterArray = word.split('');
		var alteredArray = [];
	

		// take the word passed in, split
		for(let i=0; i<letterArray.length; i++){
			var singleLetter = letterArray[i];
			// look up each letter in the mapping.
			alteredArray = key.map(function(obj, index){
				//console.log('current' + JSON.stringify(current))
				if(obj['letter'] == singleLetter){
					
					//TODO: i think i need to do something differnt when decrypting
					return alphabet[obj['index']];
			
				}
			});
		}
		//console.log(alteredArray)
		return alteredArray;
	}

	/**
	* Helper function for generating a key. 
	* 
	* @alias module:ciphers~ciphers/generateKey
	* @returns {Map: Array of Objects} Returns the mapped letter to index number [{letter: 'p', index:3}, etc.]
	*/
	function generateKey(){
		var randomArray = shuffle(numberArray);
		var key = randomArray.map(function(current, index) {
			//map randomArray with alphabet
			var letter = alphabet[index];
			var letterIndex = current;
			var tempObject = {};
			tempObject['letter'] = letter;
			tempObject['index'] = letterIndex;
			return tempObject;
		});
		return key;
	}

	/*
	* End private functions
	*/
	return {
		caesarCipher: caesarCipher,
		atbashCipher: atbashCipher,
		substituteCipher: substituteCipher
	};
};

module.exports = new Ciphers();
