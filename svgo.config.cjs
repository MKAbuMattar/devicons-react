module.exports = {
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
    'prefixIds',
    'removeDimensions',
  ],
};
