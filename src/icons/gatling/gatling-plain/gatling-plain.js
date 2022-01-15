import { createElement } from 'react'
import PropTypes from 'prop-types'

const GatlingPlain = (props) => {
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
      d: 'M94.3 3.9H33.7C17.1 3.9 3.5 17.5 3.5 34.1v60.6c0 16.6 13.6 30.2 30.2 30.2h60.6c16.6 0 30.2-13.6 30.2-30.2V34.1c0-16.6-13.6-30.2-30.2-30.2zM68.9 104.7c-22.4 3-44.2-12.9-46.6-34.1-2.8-24.8 13.4-44.8 38.2-46.4 10.8-.7 21.8-.4 32.7 0 1.8.1 8.2.1 8.2.1v3.1c.2 3.3-.9 8-3.3 9.9-3.7 2.9-8.7 4.7-13.4 5.4-6.2.9-12.5.1-18.8.3-13.9.3-22.8 6.4-24.6 16.9-1.8 10.6 1.5 19.1 11.6 23.9C64 89.1 75.3 86 85.2 73.9 72.7 71.5 56.7 77.8 55 56.8h50.4c4.1 25-10.9 44.4-36.5 47.9z',
    }),
  )
}

GatlingPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

GatlingPlain.defaultProps = {
  color: '#E77500',
  size: '128',
}

export default GatlingPlain
