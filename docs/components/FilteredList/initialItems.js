import iconsData from '../../data/icons.json'

const initialItems = iconsData

initialItems.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

export default initialItems
