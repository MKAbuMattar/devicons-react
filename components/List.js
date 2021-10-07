import { Fragment, useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import ListIcons from './ListIcons'
hljs.registerLanguage('javascript', javascript)

const List = ({ items }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return (
    <Fragment>
      <div className="cards">
        {items.map((item, idx) => (
          <div className="card" key={idx}>
            <div className="info">
              <ListIcons componentName={item.componentName} />

              <h3 className="title">{item.name}</h3>
            </div>
            <pre style={{ fontSize: 'initial' }}>
              <code className="js hljs language-javascript">
                {`import { ${item.componentName} } from 'devicons-react'`}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default List
