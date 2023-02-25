import { FC } from 'react';

import Highlight from '@/components/SyntaxHighlighter';
import Item from '@/types/item';

import ListIcons from './ListIcons';
import ListIconsBeta from './ListIconsBeta';
import { Card, CardInfo, Cards, CardTitle } from './style';

type Props = {
  items: Item[];
  isLatest?: boolean;
};

const List: FC<Props> = (props) => {
  const { items, isLatest } = props;

  return (
    <>
      <Cards>
        {items?.map((item, idx) => (
          <Card key={idx}>
            {item?.isNew && (
              <div className={'ribbon'}>
                <span>New Icon!</span>
              </div>
            )}
            <CardInfo>
              {isLatest ? (
                <ListIcons componentName={item.componentName} />
              ) : (
                <ListIconsBeta componentName={item.componentName} />
              )}

              <CardTitle>{item.name}</CardTitle>
            </CardInfo>
            <Highlight language={'JavaScript'} theme={'Base16Nord'}>
              {`import { ${item.componentName} } from 'devicons-react';

import ${item.componentName} from 'devicons-react/lib/icons/${item.componentName}';`}
            </Highlight>
          </Card>
        ))}
      </Cards>
    </>
  );
};

export default List;
