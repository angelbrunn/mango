module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: [
            'error',
            4,
            { ignoredNodes: ['JSXElement *', 'JSXAttribute'], SwitchCase: 1 }
        ],
        'global-require': 'warn',
        'no-undef': 'warn',
        'no-param-reassign': ['error', { props: false }],
        'no-return-await': 0,
        'interactive-supports-focus': 0,
        'react/jsx-one-expression-per-line': 0,
        'arrow-body-style': 0,
        'comma-dangle': ['error', 'never'],
        'react/jsx-indent': 0,
        'react/prop-types': 0,
        'react/jsx-indent-props': 0,
        'import/prefer-default-export': 0,
        'object-curly-newline': 0,
        'arrow-parens': 0
    }
};
