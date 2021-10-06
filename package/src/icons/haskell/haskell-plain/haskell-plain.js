import { createElement } from 'react'
import PropTypes from 'prop-types'

const HaskellPlain = (props) => {
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
      d: 'M0 110.2L30.1 65 0 19.9h22.6L52.7 65l-30.1 45.1H0z',
    }),
    createElement('path', {
      fill: color,
      d:
        'M30.1 110.2L60.2 65 30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1zM102.9 83.8l-10-15.1H128v15.1h-25.1zM87.8 61.3l-10-15.1H128v15.1H87.8z',
    }),
  )
}

HaskellPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

HaskellPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default HaskellPlain
