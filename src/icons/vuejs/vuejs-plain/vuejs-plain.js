import { createElement } from 'react'
import PropTypes from 'prop-types'

const VueJSPlain = (props) => {
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
        'M0 8.934l49.854.158 14.3 24.415 14.3-24.415 49.548-.158-63.835 110.134zm126.987.637l-24.37.021-38.473 66.053L25.692 9.592l-24.75-.02 63.212 107.89z',
    }),
  )
}

VueJSPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

VueJSPlain.defaultProps = {
  color: '#35495e',
  size: '128',
}

export default VueJSPlain
