/**
 * @function generateRandomString
 * @description Generate a random string of a given length.
 *
 * @param {number} length
 * @returns {string} Random string
 *
 * @example
 * ```js
 * const randomString = generateRandomString(10);
 * console.log(randomString); // 'aBcDeFgHiJ'
 * ```
 */
const generateRandomString = (length) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

/** @type {import('svgo').Config} */
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'convertStyleToAttrs',
    'cleanupIds',
    {
      name: 'prefixIds',
      params: {
        delim: '',
        prefix: () => `svg-${generateRandomString(10)}-`,
      },
    },
    'removeDimensions',
  ],
};

module.exports = svgoConfig;
