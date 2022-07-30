const initialItems = (icons) => {
  const items = icons

  items.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  return items
}

export default initialItems
