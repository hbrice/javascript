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

describe('Atbash Cipher Tests', function(){
	it('should return a value for atbashCipher', () => {
		assert.equal(ciphers.atbashCipher('abc'), 'zyx');
	})

	it('should return a value for atbashCipher', () => {
		assert.equal(ciphers.atbashCipher('zyx'), 'abc');
	})

	it('should return a value for atbashCipher', () => {
		assert.equal(ciphers.atbashCipher('merrychristmas'), 'nviibxsirhgnzh');
	})

	it('should throw an error for atbashCipher - no parameters', () => {
		expect(function(){	ciphers.atbashCipher();	}).to.throw();
	})

	it('should return a value for atbashCipher', () => {
		assert.equal(ciphers.atbashCipher('cipher'), 'xrksvi');
	})
});

describe('Substitute Cipher Tests', function(){
	it('should return an empty value for substituteCipher', () => {
		assert.equal(ciphers.substituteCipher('', ''), '');
	})

	it('should return an encrypted value for substituteCipher', () => {
		expect(ciphers.substituteCipher('wand', '')).to.not.be.null;	
	})

	it('should not be null for substituteCipher', () => {
		expect(ciphers.substituteCipher('wizards', '')).to.not.be.null;
	})

	it('should not be null for substituteCipher', () => {
		expect(ciphers.substituteCipher('expelliarmus', '')).to.not.be.null;
	})

	it('should return a value for substituteCipher', () => {
		var key = [{ letter: 'a', index: 6 },{ letter: 'b', index: 24 },
				  { letter: 'c', index: 18 },{ letter: 'd', index: 9 },
				  { letter: 'e', index: 5 },{ letter: 'f', index: 16 },
				  { letter: 'g', index: 4 },{ letter: 'h', index: 21 },
				  { letter: 'i', index: 12 },{ letter: 'j', index: 20 },
				  { letter: 'k', index: 19 },{ letter: 'l', index: 3 },
				  { letter: 'm', index: 10 },{ letter: 'n', index: 14 },
				  { letter: 'o', index: 15 },{ letter: 'p', index: 17 },
				  { letter: 'q', index: 0 },{ letter: 'r', index: 7 },
				  { letter: 's', index: 25 },{ letter: 't', index: 23 },
				  { letter: 'u', index: 8 },{ letter: 'v', index: 11 },
				  { letter: 'w', index: 2 },{ letter: 'x', index: 22 },
				  { letter: 'y', index: 1 },{ letter: 'z', index: 13 }]
		assert.equal(ciphers.substituteCipher('abc', key), '');
	})

	
});