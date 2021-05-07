module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,css,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};
