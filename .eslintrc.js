module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/function-component-definition': [
			2,
			{namedComponents: 'arrow-function'},
		],
		commonjs: true,
		'react-hooks/rules-of-hooks': error,
		'react-hooks/exhaustive-deps': warn,
		strict: ['error', 'never'],
	},
}
