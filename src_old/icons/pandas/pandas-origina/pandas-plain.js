import { createElement } from 'react'
import PropTypes from 'prop-types'

const PandasPlain = (props) => {
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
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z',
      }),
      createElement('path', {
        d: 'M48.697 48.037h12.25v12.001h-12.25z',
      }),
      createElement('path', {
        d:
          'M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z',
      }),
      createElement('path', {
        d: 'M67.97 68.983h12.25v12.001H67.97z',
      }),
      createElement('path', {
        d: 'M87.238 8.55h12.25v84.552h-12.25z',
      }),
    ),
  )
}

PandasPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

PandasPlain.defaultProps = {
  color: '#130754',
  size: '128',
}

export default PandasPlain
