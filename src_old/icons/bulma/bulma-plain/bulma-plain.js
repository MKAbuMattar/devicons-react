import { createElement } from 'react'
import PropTypes from 'prop-types'

const BulmaPlain = (props) => {
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
      d: 'M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z',
    }),
  )
}

BulmaPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BulmaPlain.defaultProps = {
  color: '#00D1B2',
  size: '128',
}

export default BulmaPlain
