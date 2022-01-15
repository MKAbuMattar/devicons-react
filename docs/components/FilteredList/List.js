import { Fragment, useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import ListIcons from './ListIcons'
hljs.registerLanguage('javascript', javascript)

import { Cards, Card, CardInfo, CardTitle } from './Style'

const List = ({ items }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [items])

  return (
    <Fragment>
      <Cards>
        {items.map((item, idx) => (
          <Card key={idx}>
            <CardInfo>
              <ListIcons componentName={item.componentName} />

              <CardTitle>{item.name}</CardTitle>
            </CardInfo>
            <pre>
              <code className="js hljs language-javascript">
                {`import { ${item.componentName} } from 'devicons-react'

import ${item.componentName} from 'devicons-react/dist/icon/${item.fileName}'`}
              </code>
            </pre>
          </Card>
        ))}
      </Cards>
    </Fragment>
  )
}

export default List
