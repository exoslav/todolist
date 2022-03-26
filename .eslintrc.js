module.exports = {
    env: { node: true },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/ban-ts-comment': 'off'
    }
};