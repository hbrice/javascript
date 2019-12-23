"use strict";

var Ciphers = function (){

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
		const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		const maxAlphabet = 25;

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
	* @param 
	* @returns {encodedWord: String} Returns the new endocded word
	*/
	var atbashCipher = function(word){
		const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
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

		return encodedWord;
	};

	/**
	* End public functions
	**/


	/**
	* Start private functions
	**/
	

	/*
	* End private functions
	*/
	return {
		caesarCipher: caesarCipher,
		atbashCipher: atbashCipher
	};
};

module.exports = new Ciphers();
