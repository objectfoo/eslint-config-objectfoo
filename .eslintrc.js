module.exports = {
	extends: [
		'standard',
		'standard-jsx'
	],
	rules: {
		'semi': [2, 'always'],
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'no-tabs': 0,
		"react/jsx-indent-props": "Tab"
	}
};
