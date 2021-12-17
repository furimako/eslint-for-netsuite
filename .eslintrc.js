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
        'linebreak-style': 'off'
    }
};
