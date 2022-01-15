import { createElement } from 'react'
import PropTypes from 'prop-types'

const TensorflowPlain = (props) => {
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
        'M61.55 128l-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z',
    }),
  )
}

TensorflowPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

TensorflowPlain.defaultProps = {
  color: '#ff6f00',
  size: '128',
}

export default TensorflowPlain
