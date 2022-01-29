import { createElement } from 'react'
import PropTypes from 'prop-types'

const KotlinPlain = (props) => {
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
        'M0 0h61.4L0 60.4zM0 128L128 0H64.6L0 63.7zM128 128L64.6 66.6 3.3 128z',
    }),
  )
}

KotlinPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

KotlinPlain.defaultProps = {
  color: '#7F6CB1',
  size: '128',
}

export default KotlinPlain
