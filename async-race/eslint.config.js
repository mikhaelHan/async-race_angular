// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');
const eslintUnusedImports = require('eslint-plugin-unused-imports');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginUnicorn.default.configs['flat/recommended'],
      eslintPluginPrettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      'unused-imports': eslintUnusedImports,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          filter: {
            regex: '^(ts-jest|\\^.*)$',
            match: false,
          },
        },
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
        {
          selector: 'property',
          format: null,
          filter: {
            regex: '^(host)$',
            match: false,
          },
        },
      ],
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-invalid-this': ['warn'],
      '@angular-eslint/no-host-metadata-property': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-null': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: { '@angular-eslint/template': angularTemplatePlugin },
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
    },
  }
);
