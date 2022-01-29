import { createElement } from 'react'
import PropTypes from 'prop-types'

const JuliaPlain = (props) => {
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
      createElement('circle', {
        cx: '29.1',
        cy: '94.2',
        r: '29.1',
      }),
      createElement('circle', {
        cx: '98.9',
        cy: '94.2',
        r: '29.1',
      }),
      createElement('circle', {
        cx: '64',
        cy: '33.8',
        r: '29.1',
      }),
    ),
  )
}

JuliaPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

JuliaPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default JuliaPlain
