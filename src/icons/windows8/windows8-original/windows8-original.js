import { createElement } from 'react'
import PropTypes from 'prop-types'

const Windows8Original = (props) => {
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
        'M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z',
    }),
  )
}

Windows8Original.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Windows8Original.defaultProps = {
  color: '#00ADEF',
  size: '128',
}

export default Windows8Original
