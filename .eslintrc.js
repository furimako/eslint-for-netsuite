module.exports = {
    env: { browser: true, node: true, amd: true },
    parserOptions: { ecmaVersion: 6 },
    extends: ['airbnb-base'],
    globals: { log: 'readonly' },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        camelcase: 'off',
        'import/no-amd': 'off',
        'comma-dangle': ['error', 'never'],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', { functions: false, variables: true }],
        'no-else-return': 'off',
        'no-lonely-if': 'off',
        'no-plusplus': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'vars-on-top': 'off',
        'prefer-destructuring': 'off',
        'func-names': 'off',
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
}
