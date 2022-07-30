// style
import { ScrollToTopButton } from './style.js'

// component
import GetIcon from '@/components/GetIcon'

// hook
import useScrollToTop from './hooks/useScrollToTop'

// util
import scrollToTop from './utils/scrollToTop.util'

const index = (props) => {
  const {
    top = 20,
    className = '',
    icon = 'ChevronUpIcon',
    smooth,
    children,
    ...otherProps
  } = props

  const { visible } = useScrollToTop(top)

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
  )
}

export default index
