import { createElement } from 'react'
import PropTypes from 'prop-types'

const AngularjsPlain = (props) => {
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
      fill: '#B3B3B3',
      d: 'M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z',
    }),
    createElement('path', {
      fill: '#A6120D',
      d: 'M117.536 25.998L63.672 7.629v112.785l45.141-24.983z',
    }),
    createElement('path', {
      d: 'M11.201 26.329l8.026 69.434 44.444 24.651V7.627z',
      fill: '#DD1B16',
    }),
    createElement('path', {
      fill: '#F2F2F2',
      d: 'M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z',
    }),
    createElement('path', {
      fill: '#B3B3B3',
      d: 'M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z',
    }),
  )
}

AngularjsPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

AngularjsPlain.defaultProps = {
  color: '#C4473A',
  size: '128',
}

export default AngularjsPlain
