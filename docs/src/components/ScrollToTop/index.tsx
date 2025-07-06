import type {FC} from 'react';

// component
import GetIcon from '@/components/GetIcon';
// hook
import useScrollToTop from '@/components/ScrollToTop/hooks/useScrollToTop';
// type
import type Props from '@/components/ScrollToTop/types/scrollToTop';
// util
import scrollToTop from '@/components/ScrollToTop/utils/scrollToTop.util';

// style
import {ScrollToTopButton} from './style';

const index: FC<Props> = (props) => {
  const {
    top = 20,
    className = '',
    icon = 'ChevronUpIcon',
    smooth,
    children,
    ...otherProps
  } = props;

  const {visible} = useScrollToTop(top);

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
