/** @type {import("prettier").Options} */
const config = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  singleQuote: true,
  jsxSingleQuote: false,
};

module.exports = config;
