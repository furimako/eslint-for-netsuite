module.exports = {
    env: {
        browser: true,
        node: true,
        amd: true
    },
    globals: {
        log: 'readonly'
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        camelcase: 'off',
        'import/no-amd': 'off',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'max-len': ['error', { code: 150 }],
        'comma-dangle': ['error', 'never'],
        'object-shorthand': ['error', 'never'],
        'no-var': 'off',
        'no-redeclare': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-else-return': 'off',
        'no-lonely-if': 'off',
        'no-plusplus': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'prefer-destructuring': 'off',
        'func-names': 'off',
        'block-scoped-var': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'vars-on-top': 'off',
        'linebreak-style': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want.'
                    + ' Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ]

    }
};
