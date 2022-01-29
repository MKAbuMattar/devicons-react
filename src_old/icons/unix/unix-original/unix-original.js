import { createElement } from 'react'
import PropTypes from 'prop-types'

const UnixOriginal = (props) => {
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
        'M7 3v6.554h40.792V3H7zm71.75 0v6.554H121V3H78.75zM7 16.835v6.554h40.792v-6.554H7zm71.75 0v6.554H121v-6.554H78.75zM7 30.306v6.554h40.792v-6.554H7zm71.75 0v6.554H121v-6.554H78.75zM7 60.597c0 22.573.073 23.52 2.55 30.91 2.658 8.047 6.228 13.872 11.8 19.442 9.761 9.685 22.4 14.454 39.736 15 19.887.62 35.002-4.369 45.71-15.145 5.5-5.534 9.615-12.488 11.982-20.243 2.15-6.99 2.222-8.155 2.222-30.073V40.5l-21.015.073-21.052.11s-.182.066-.182 28.943c0 32.984-5.526 38.91-16.192 38.91s-14.901-5.67-14.694-39.747c.172-28.193-.11-28.289-.11-28.289H7v20.097z',
    }),
  )
}

UnixOriginal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

UnixOriginal.defaultProps = {
  color: '#4051b5',
  size: '128',
}

export default UnixOriginal
