import { createElement } from 'react'
import PropTypes from 'prop-types'

const BackbonejsPlain = (props) => {
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
      d: 'M64 31.124L15 3.239v121.522l49-27.885 49 27.885V3.239L64 31.124zM40.714 63.999l24.369-13.89 24.368 13.89-24.368 13.892-24.369-13.892zM32 29.934l17.433 9.937L32 49.809V29.934zm0 48.257l16.126 9.191L32 96.575V78.191zm65 18.384l-16.127-9.192L97 78.191v18.384zM79.566 39.87L97 29.934v19.875L79.566 39.87z',
    }),
  )
}

BackbonejsPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BackbonejsPlain.defaultProps = {
  color: '#002A41',
  size: '128',
}

export default BackbonejsPlain