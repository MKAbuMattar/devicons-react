export const filterIt = (terms, arr) => {
  if ('' === terms || terms.length < 1) {
    return arr
  }

  const words = terms.match(/\w+|"[^"]+"/g)

  words.push(terms)

  return arr.filter((a) => {
    const v = Object.values(a)
    const f = JSON.stringify(v).toLowerCase()
    return words.every((val) => f.includes(val))
  })
}
