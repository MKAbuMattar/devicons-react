import { createElement } from 'react'
import PropTypes from 'prop-types'

const FSharpPlain = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 128 128',
      ...otherProps,
    },
    createElement('path', {
      fill: color,
      d: 'M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5zm39.1 0l21.7-21.7v43.4L39.1 64.5zm88.9 0L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z',
    }),
  )
}

FSharpPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

FSharpPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default FSharpPlain