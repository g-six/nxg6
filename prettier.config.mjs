/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: true,
  trailingComma: 'es5',
  tailwindFunctions: ['clsx', 'tw'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
}

export default config
