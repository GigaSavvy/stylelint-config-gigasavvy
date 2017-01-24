'use strict';

module.exports = {
    'rules': {
        'font-family-name-quotes': 'always-unless-keyword',
        'font-family-no-duplicate-names': true,

        'function-calc-no-unspaced-operator': true,
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-whitespace-after': 'always',

        'number-leading-zero': 'always',
        'number-max-precision': [4, { 'severity': 'warning' }],
        'number-no-trailing-zeros': true,

        'string-no-newline': true,

        'length-zero-no-unit': true,

        'unit-case': 'lower',

        'value-keyword-case': 'lower',

        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        'custom-property-empty-line-before': ['always', {
            'except': [
                'after-comment',
                'after-custom-property',
                'first-nested',
            ],
        }],

        'property-case': 'lower',

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-ignored-properties': [true, {
            'severity': 'warning',
        }],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 0,
        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-no-single-line': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-before': 'always',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-max-specificity': '1,5,2',
        'selector-no-qualifying-type': [true, {
            'ignore': [
                'attribute',
                'class'
            ],
        }],
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'selector-max-empty-lines': 0,
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        'rule-nested-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['after-comment'],
        }],
        'rule-non-nested-empty-line-before': ['always', {
            ignore: ['after-comment']
        }],

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-no-missing-punctuation': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        'at-rule-empty-line-before': ['always', {
            'except': [
                'blockless-after-same-name-blockless',
                'blockless-group',
                'first-nested',
            ],
            'ignore': ['after-comment'],
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',

        'stylelint-disable-reason': 'always-before',

        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['between-comments'],
        }],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': ['kakorrhaphiophobia'],

        'indentation': 4,
        'max-empty-lines': 1,
        'max-line-length': [80, {
            'severity' : 'warning',
            'ignore': ['comments'],
        }],
        'max-nesting-depth': 5,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
    }
};
