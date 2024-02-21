/** @type {import("prettier").Options} */
const config = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  jsxSingleQuote: false,
};

module.exports = config;
