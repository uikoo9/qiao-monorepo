module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2022': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'ignorePatterns': ['dist'],
    'plugins': [
        'react-hooks'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    }
};
