import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    rules: {},
  },
]
