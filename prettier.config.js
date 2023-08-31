/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: false,
  bracketSameLine: true,
  arrowParens: 'always',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
