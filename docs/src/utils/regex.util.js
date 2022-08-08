export const removeExtra = (str) =>
  str
    .replace(' Original', '')
    .replace(' Plain', '')
    .replace(' Line', '')
    .replace(' Wordmark', '');
