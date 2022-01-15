import { createElement } from 'react'
import PropTypes from 'prop-types'

const VagrantPlain = (props) => {
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
        d:
          'M122.51 23.9V12.82l-26.6 15.47v9.35L74.64 83.55l-10.65 7.33v33.61l22.81-13.15 35.71-87.44zM63.99 66.94L48.04 29.71V19.18l-.11-.05-15.85 9.16v9.35l21.28 47.92 10.63-5.26V66.94z',
      }),
      createElement('path', {
        d:
          'M106.56 3.51L79.97 19.08l-.02-.01V29.71L63.99 66.94v12.45l-10.63 6.17-21.28-47.92v-9.37l15.97-9.18-26.6-15.58-15.96 9.31v11.41l35.91 87.21 22.59 13.05V91.73l10.65-6.17-.14-.08 21.41-47.84v-9.35l.01-.02 26.59-15.45-15.95-9.31z',
      }),
    ),
  )
}

VagrantPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

VagrantPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default VagrantPlain
