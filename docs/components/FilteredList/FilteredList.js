import { Fragment, useState, useEffect, useCallback } from 'react'

import List from './List'
import { filterIt } from './filterIt'
import initialItems from './initialItems'

import { removeExtra } from '../../utils/Regex'

import {
  SearchSection,
  SearchInput,
  CountSection,
  CountWrapper,
  MainWrapper,
} from './Style'

const FilteredList = () => {
  const [items, setItems] = useState(initialItems)
  const [iconsLength, setIonsLength] = useState()

  useEffect(() => {
    setItems(initialItems)
    setIonsLength(totalIconCount(items).length)
  }, [])

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase()
    const updatedList = filterIt(searchQuery, initialItems)
    setItems(updatedList)
    setIonsLength(totalIconCount(updatedList).length)
  }, [])

  const totalIconCount = (items) => {
    const data = []
    items.forEach((result) => data.push(removeExtra(result.name)))
    return [...new Set(data)]
  }

  return (
    <Fragment>
      <main>
        <SearchSection id="search">
          <SearchInput type="text" placeholder="Search" onChange={filterList} />
        </SearchSection>
        <CountSection>
          <CountWrapper>
            <p>Total icon count: {iconsLength && iconsLength}</p>
            <p>Total icon count of all types: {items && items.length}</p>
          </CountWrapper>
        </CountSection>
        <MainWrapper>
          <List items={items} />
        </MainWrapper>
      </main>
    </Fragment>
  )
}

export default FilteredList
