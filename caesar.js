// create a caesar cipher

function cipherText(word, shiftCount){
	const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const maxAlphabet = 25;

	let encodedWord = ""; 	// String
	let letter = ""; 		// String
	let encodedLetter = ""; // String
	let index = 0;			// Integer
	let encodedIndex = 0;	// Integer

	// seperate each letter
	let letterArray = word.split('');
	
	// find the index of the letter in the alphabet
	while (letterArray.length > 0){

		// get first letter of word
		letter = letterArray[0];
		
		// get index of letter
		index = alphabet.indexOf(letter);
		
		// apply the caesar shift to the index
		encodedIndex = index - shiftCount;
	
		//edge case wrapping alaphabet
		if (encodedIndex < 0 ){
			encodedIndex = maxAlphabet + encodedIndex;
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
}
