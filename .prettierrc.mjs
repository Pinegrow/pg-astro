/** @type {import("prettier").Config} */

export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  vueIndentScriptAndStyle: true,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
}
