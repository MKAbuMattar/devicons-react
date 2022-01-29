import { createElement } from 'react'
import PropTypes from 'prop-types'

const GitterPlain = (props) => {
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
      d: 'M96.8 25.6H107v51.2H96.8zM71.2 25.6h10.2V128H71.2zM45.6 25.6h10.2V128H45.6zM20 0h10.2v76.8H20z',
    }),
  )
}

GitterPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

GitterPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default GitterPlain
