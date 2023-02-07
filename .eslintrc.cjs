module.exports = {
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'root': true,
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  'rules': {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/ban-ts-ignore": "off",
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-inner-declarations': 'off',
    'prefer-const': 'off',
    'no-constant-condition': 'off',
  },
  "ignorePatterns": ["**/build/*"],
};