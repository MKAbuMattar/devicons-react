import { Fragment, useState, useCallback, useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

import List from './List'
import { filterIt } from './filterIt'
import { initialItems } from './initialItems'

const FilteredList = () => {
  const [items, setItems] = useState(initialItems)

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase()
    const updatedList = filterIt(searchQuery, initialItems)
    setItems(updatedList)
  }, [])

  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return (
    <Fragment>
      <div className="filter-list">
        <h2>Devicons React</h2>
        <pre style={{ fontSize: 'initial' }}>
          <code className="bash language-bash hljs">
            {`#npm
npm install --save devicons-react

#yarn
yarn add devicons-react`}
          </code>
        </pre>
        <span>beta</span>
        <input type="text" placeholder="Search" onChange={filterList} />
        <List items={items} />
      </div>
    </Fragment>
  )
}

export default FilteredList
