import { Fragment, useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

import ListIcons from './ListIcons'
import ListIconsBeta from './ListIconsBeta'

import { Cards, Card, CardInfo, CardTitle } from './style'

const List = ({ items, isLatest }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [items])

  return (
    <Fragment>
      <Cards>
        {items.map((item, idx) => (
          <Card key={idx}>
            <CardInfo>
              {isLatest ? (
                <ListIcons componentName={item.componentName} />
              ) : (
                <ListIconsBeta componentName={item.componentName} />
              )}

              <CardTitle>{item.name}</CardTitle>
            </CardInfo>
            <pre>
              <code className="js hljs language-javascript">
                {`import { ${item.componentName} } from 'devicons-react'

import ${item.componentName} from '${item.fileName}'`}
              </code>
            </pre>
          </Card>
        ))}
      </Cards>
    </Fragment>
  )
}

export default List
