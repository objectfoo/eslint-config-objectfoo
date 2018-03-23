module.exports = {
	extends: [
		'react-app',
		'plugin:jsx-a11y/recommended'
	],
	plugins: ['jsx-a11y'],
	rules: {
		semi: [2, 'always'],
		indent: ['error', 'tab', {'SwitchCase': 1}],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab']
	}
};
