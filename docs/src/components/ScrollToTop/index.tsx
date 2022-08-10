import { FC } from 'react';

// type
import type Props from '@/components/ScrollToTop/types/scrollToTop';

// style
import { ScrollToTopButton } from './style';

// component
import GetIcon from '@/components/GetIcon';

// hook
import useScrollToTop from '@/components/ScrollToTop/hooks/useScrollToTop';

// util
import scrollToTop from '@/components/ScrollToTop/utils/scrollToTop.util';

const index: FC<Props> = (props) => {
  const {
    top = 20,
    className = '',
    icon = 'ChevronUpIcon',
    smooth,
    children,
    ...otherProps
  } = props;

  const { visible } = useScrollToTop(top);

  return (
    <>
      {visible && (
        <ScrollToTopButton
          type={'button'}
          className={`scrollToTop ${className}`}
          title={'Scroll to top'}
          onClick={() => scrollToTop(smooth)}
          {...otherProps}
        >
          {children || <GetIcon icon={icon} />}
        </ScrollToTopButton>
      )}
    </>
  );
};

export default index;
