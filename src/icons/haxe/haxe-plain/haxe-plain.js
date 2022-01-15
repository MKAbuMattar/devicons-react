import { createElement } from 'react'
import PropTypes from 'prop-types'

const HaxePlain = (props) => {
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
      d:
        'M0 0h32.3L64 16 96.3 0H128v32.6L111.8 64 128 95.8V128H95.2L64 112.1 32.6 128H0V94.7L15.7 64 0 31.8z',
    }),
  )
}

HaxePlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

HaxePlain.defaultProps = {
  color: '#EA8220',
  size: '128',
}

export default HaxePlain
