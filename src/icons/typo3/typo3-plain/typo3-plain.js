import { createElement } from 'react'
import PropTypes from 'prop-types'

const Typo3Plain = (props) => {
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
        'M94.79 87a16.73 16.73 0 01-5.12.73c-15.44 0-38.11-53.95-38.11-71.91 0-6.6 1.57-8.81 3.78-10.7-18.9 2.2-41.57 9.14-48.82 18C5 25.27 4 28.73 4 33.14c0 28 29.92 91.64 51 91.64 9.77 0 26.23-16 39.77-37.79M84.94 3.22c19.52 0 39.06 3.15 39.06 14.17 0 22.36-14.18 49.46-21.42 49.46-12.91 0-29-35.91-29-53.87 0-8.19 3.14-9.76 11.33-9.76',
    }),
  )
}

Typo3Plain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Typo3Plain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default Typo3Plain
