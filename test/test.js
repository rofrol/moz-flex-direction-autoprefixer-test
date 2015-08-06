var fs = require('fs');
var file = fs.readFileSync('moz-flex-direction.css', 'utf8');
var autoprefixed = fs.readFileSync('moz-flex-direction-autoprefixed.css', 'utf8');
var processed = '';

var postcss = require('postcss');
var autoprefixer = require('autoprefixer-core');
var cleaner  = postcss([ autoprefixer({ browsers: ["and_ff >= 32"] }) ]);
cleaner.process(file).then(function (result) {
	processed = result.css;
	done();
});

var assert = require("assert");
describe('Array', function() {
	describe('postcss', function () {
		it('autoprefixer should remove -moz-flex-direction for and_ff >= 32', function (done) {
			assert.equal(processed, autoprefixed);
		});
	});
});
