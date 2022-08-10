export const removeExtra = (str: string): string =>
  str
    .replace(' Original', '')
    .replace(' Plain', '')
    .replace(' Line', '')
    .replace(' Wordmark', '');
