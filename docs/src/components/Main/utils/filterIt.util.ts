export const filterIt = (terms: string, arr: any[]) => {
  if ('' === terms || terms.length < 2) {
    return arr;
  }

  const words = terms.match(/\w+|"[^"]+"/g);

  words?.push(terms);

  return arr.filter((a: { [s: string]: unknown } | ArrayLike<unknown>) => {
    const v = Object.values(a);
    const f = JSON.stringify(v).toLowerCase();
    return words?.every((val: string) => f.includes(val));
  });
};
