//unit tests for caesar cipher
const assert = require('assert')

it('should return the ciphered text', () => {
	assert.equeal(cipherText('world', 1), 'gdkkn');
})

it('should return the ciphered tex', () => {
	assert.equeal(cipherText('hello', 0), 'hello');
})

