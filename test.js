//unit tests for caesar cipher
const assert = require('assert')

it('should return true', () => {
  assert.equal(true,true)
})

it('should return a value', () => {
	assert.equeal(cipherText('lightsaber', 5, true), 'gdbconuvym');
})

it('should return a value', () => {
	assert.equeal(cipherText('lightsaber', 5, false), 'qnlmyxfgjw');
})

it('should return a value', () => {
	assert.equeal(cipherText('world', 1, false), 'xpsme');
})

it('should return a value', () => {
	assert.equeal(cipherText('world', 1, true), 'vnqkc');
})

it('should return a value', () => {
	assert.equeal(cipherText('hello', 0, true), 'hello');
})

it('should return a value', () => {
	assert.equeal(cipherText('hello', 0, false), 'hello');
})

it('should return a value', () => {
	assert.equeal(cipherText('hello', 2, true), 'fcjjm');
})

it('should return a value', () => {
	assert.equeal(cipherText('hello', 2, false), 'jgnnq');
})
