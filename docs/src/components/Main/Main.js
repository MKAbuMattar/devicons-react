import { Fragment, useState, useCallback } from 'react'

import List from './List'
import { filterIt } from './filterIt'
import initialItems from './initialItems'

import { SearchSection, SearchInput, MainWrapper } from './Style'

const Main = () => {
  const [items, setItems] = useState(initialItems)

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase()
    const updatedList = filterIt(searchQuery, initialItems)
    setItems(updatedList)
  }, [])

  return (
    <Fragment>
      <main>
        <SearchSection id="search">
          <SearchInput type="text" placeholder="Search" onChange={filterList} />
        </SearchSection>
        <MainWrapper>
          <List items={items} />
        </MainWrapper>
      </main>
    </Fragment>
  )
}

export default Main
