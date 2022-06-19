module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  'plugins': [
    'vue',
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 1,
        'multiline': {
          'max': 1,
          'allowFirstLine': true
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': false,
        'ignores': []
      }
    ],
    'vue/component-definition-name-casing': [
      'error',
      'kebab-case'
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': true,
        'ignores': [
          'pre',
          'textarea',
          'span',
          'template'
        ]
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        'ignoreWhenEmpty': true,
        'ignores': [
          'pre',
          'textarea',
          'span',
          'template'
        ],
        'allowEmptyLines': false
      }
    ],
    'vue/v-slot-style': [
      'warn',
      'longform'
    ]
  }
};