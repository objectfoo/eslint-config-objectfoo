module.exports = {
	extends: [
		'react-app'
	],
	rules: {
		semi: [2, 'always'],
		indent: ['error', 'tab', {'SwitchCase': 1}],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab']
	}
};
