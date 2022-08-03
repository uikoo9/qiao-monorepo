module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2022': true,
        'jest': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'ignorePatterns': ['dist'],
    'plugins': [
        'react-hooks'
    ],
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
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
