const initialItems = (icons: any) => {
  const items = icons;

  items.sort((a: { name: string }, b: { name: any }) => {
    return a.name.localeCompare(b.name);
  });

  return items;
};

export default initialItems;
