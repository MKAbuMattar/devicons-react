import { FC, useCallback, useEffect, useState } from 'react';

import Highlight from '@/components/SyntaxHighlighter';
import Item from '@/types/item';
import { removeExtra } from '@/utils/regex.util';

import List from './List';
import {
  CountSection,
  CountWrapper,
  Main,
  MainCard,
  MainCardInfo,
  MainCardTitle,
  MainWrapper,
  SearchInput,
  SearchSection,
} from './style';
import { filterIt } from './utils/filterIt.util';
import initialItems from './utils/initialItems.util';

type Props = {
  icons?: Item[];
  isLatest?: boolean;
};

const index: FC<Props> = (props) => {
  const { icons, isLatest } = props;

  const [items, setItems] = useState(initialItems(icons));
  const [iconsLength, setIonsLength] = useState();

  const totalIconCount = (items: Item[]): any => {
    const data: string[] = [];
    items?.forEach((result) => data.push(removeExtra(result.name)));
    return [...new Set(data)];
  };

  const filterList = useCallback(({ target }: any) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems(icons));
    setItems(updatedList);
    setIonsLength(totalIconCount(updatedList).length);
  }, []);

  useEffect(() => {
    setItems(initialItems(icons));
    setIonsLength(totalIconCount(items).length);
  }, []);

  return (
    <>
      <Main>
        {isLatest ? (
          <MainCard>
            <MainCardInfo>
              <MainCardTitle>Install package</MainCardTitle>
            </MainCardInfo>
            <Highlight language={'TypeScript'} theme={'Base16Nord'}>
              {`#npm
npm install --save devicons-react@latest

#yarn
yarn add devicons-react@latest

#pnpm
pnpm add devicons-react@latest`}
            </Highlight>
          </MainCard>
        ) : (
          <MainCard>
            <MainCardInfo>
              <MainCardTitle>Install package</MainCardTitle>
            </MainCardInfo>
            <Highlight language={'TypeScript'} theme={'Base16Nord'}>
              {`#npm
npm install --save devicons-react@beta

#yarn
yarn add devicons-react@beta

#pnpm
pnpm add devicons-react@beta

#OR TO INSTALL TWO VERSIONS @LATEST AND @BETA

#npm
npm install --save @beta/devicons-react@npm:devicons-react@beta

#yarn
yarn add @beta/devicons-react@npm:devicons-react@beta

#pnpm
pnpm add @beta/devicons-react@npm:devicons-react@beta`}
            </Highlight>
          </MainCard>
        )}
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
          <List items={items} isLatest={isLatest} />
        </MainWrapper>
      </Main>
    </>
  );
};

export default index;
