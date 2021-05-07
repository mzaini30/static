module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,css,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: '_site/sw.js'
};