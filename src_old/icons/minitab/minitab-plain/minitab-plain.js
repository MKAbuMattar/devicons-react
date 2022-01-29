import { createElement } from 'react'
import PropTypes from 'prop-types'

const MinitabPlain = (props) => {
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
        'M0 0v128h128V0H0zm34.6 106.5H14.8v-54h19.7v54zm27.1 0H42v-87h19.7v87zm27.1 0H69.1V37.6h19.7v68.9zm27.2 0H96.3V68.6H116v37.9z',
    }),
  )
}

MinitabPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MinitabPlain.defaultProps = {
  color: '#8DC63F',
  size: '128',
}

export default MinitabPlain
