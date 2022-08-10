import { FC, useEffect } from 'react';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import ListIcons from './ListIcons';
import ListIconsBeta from './ListIconsBeta';
import { Card, CardInfo, Cards, CardTitle } from './style';

import Item from '@/types/item';

type Props = {
  items: Item[];
  isLatest?: boolean;
};

const List: FC<Props> = (props) => {
  const { items, isLatest } = props;

  useEffect(() => {
    hljs.initHighlighting();
  }, [items]);

  return (
    <>
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
    </>
  );
};

export default List;
