//unit tests for caesar cipher
const ciphers = require('./ciphers.js')

const assert = require('assert')
var chai = require('chai');
var expect = chai.expect;


describe('Mocha Framework Tests ', function(){

	it('should return true', () => {
	  assert.equal(true,true)
	});
});

describe('Caesar Cipher Tests', function(){

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('lightsaber', 5, true), 'gdbconuvym');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('lightsaber', 5, false), 'qnlmyxfgjw');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('world', 1, false), 'xpsme');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('world', 1, true), 'vnqkc');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('hello', 0, true), 'hello');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('hello', 0, false), 'hello');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('hello', 2, true), 'fcjjm');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('hello', 2, false), 'jgnnq');
	})

	it('should return a value for caesarCipher', () => {
		assert.equal(ciphers.caesarCipher('hello', 2, false), 'jgnnq');
	})

	it('should return a value for caesarCipher - large shiftCount', () => {
		assert.equal(ciphers.caesarCipher('hello', 85, false), 'olssv');
	})


	it('should throw an error for caesarCipher - no parameters', () => {
		expect(function(){	ciphers.caesarCipher();	}).to.throw();
	})

	it('should throw an error for caesarCipher - no word', () => {
		expect(function(){	ciphers.caesarCipher(1,true);	}).to.throw();
	})

	it('should throw an error for caesarCipher - negative shiftCount', () => {
		expect(function(){	ciphers.caesarCipher('hello',-1,true);	}).to.throw();
	})

});