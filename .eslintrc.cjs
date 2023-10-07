module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        "no-console": "warn",
        "prefer-const": "warn",
        "quotes": [
            "warn",
            "single"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "max-len": [
            "error",
            {
                "code": 130
            }
        ],
        "comma-dangle": [
            "warn",
            "never"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "react-hooks/exhaustive-deps": "off"
    },
}
