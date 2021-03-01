module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: 'preact',
  globals: [
    'config'
  ],
  ignorePatterns: [
    'build/'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'array-callback-return': [ 2, { allowImplicit: true } ],
    'arrow-parens': 2,
    'brace-style': 2,
    'comma-dangle': [ 2, 'never' ],
    'comma-spacing': [ 2, { after: true } ],
    'jest/consistent-test-it': [ 2, { fn: 'it', withinDescribe: 'it' } ],
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/no-jest-import': 2,
    'jest/no-test-prefixes': 2,
    'jest/no-test-return-statement': 2,
    'jsx-quotes': [ 2, 'prefer-single' ],
    'key-spacing': [ 2, { afterColon: true, beforeColon: false } ],
    'keyword-spacing': [ 2, { overrides: { else: { before: true } } } ],
    'linebreak-style': [ 2, 'unix' ],
    'max-len': 0,
    'no-console': 2,
    'no-const-assign': 2,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-else-return': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 2,
    'no-template-curly-in-string': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unused-vars': [ 2, { args: 'after-used', ignoreRestSiblings: true, vars: 'all' } ],
    'no-var': 2,
    'no-with': 2,
    'object-shorthand': [ 2, 'properties' ],
    'one-var': 0,
    'padded-blocks': [ 2, 'never' ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': [ 2, { array: false, object: true } ],
    'prefer-template': 2,
    'quote-props': [ 2, 'as-needed' ],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-imports': [ 2, { ignoreDeclarationSort: true } ],
    'sort-keys': [ 2, 'asc', { caseSensitive: false } ],
    'space-before-blocks': [ 2, 'always' ],
    'space-in-parens': [ 2, 'never' ],
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, { nonwords: false } ],
    'spaced-comment': [ 2, 'always' ],
    camelcase: 0,
    curly: [ 2, 'all' ],
    indent: [ 2, 2, { ignoredNodes: [ 'TemplateLiteral' ], SwitchCase: 1 } ],
    quotes: [ 2, 'single' ],
    semi: [ 2, 'always' ],
    strict: [ 2, 'never' ]
  }
};
