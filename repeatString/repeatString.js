const repeatString = function(word, times) {

	let output = ''
	for (let i = 0; i < times; i++) {
		output += word
	}

	return output
}

module.exports = repeatString
