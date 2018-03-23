# eslint-config-objectfoo

Swiched to create react app rules!

[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) with the following exceptions:

```javascript
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
```
