import { createElement } from 'react'
import PropTypes from 'prop-types'

const NodewebkitPlain = (props) => {
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
        'M69.7 61.8c-.7-1.2-2-2.1-3.5-2.1h-.3c-2.3 0-4.1 1.8-4.3 4-.1.9.1 1.7.6 2.5.7 1.2 2 2.1 3.5 2.1h.3c2.3 0 4.2-1.8 4.3-4 .1-.9-.1-1.7-.6-2.5zm-3.8 3.7c-.8-.1-1.5-.8-1.4-1.6.1-.8.8-1.5 1.6-1.4.8.1 1.5.8 1.4 1.6 0 .8-.8 1.5-1.6 1.4zm52.2-36.1L69.9 1.6c-2.1-1.2-5.6-1.2-7.7 0L13.9 29.4c-2.1 1.2-3.9 4.2-3.9 6.7v55.7c0 2.5 1.7 5.5 3.9 6.7l48.2 27.9c2.1 1.2 5.6 1.2 7.7 0L118 98.5c2.1-1.2 3.9-4.2 3.9-6.7V36.1c.1-2.4-1.7-5.4-3.8-6.7zM22 89.9l39.5-30.1v.1c-.9 1-1.5 2.3-1.6 3.7-.1 1.2.2 2.4.8 3.5 1 1.8 2.8 2.9 4.9 3h.4c.5 0 .9-.1 1.3-.2L22 89.9zm44-21.3h-.3c-1.5-.1-2.9-.9-3.7-2.3-.5-.8-.7-1.7-.6-2.6.2-2.4 2.2-4.3 4.6-4.3h.3c1.5.1 2.9 1 3.7 2.3.5.8.7 1.7.6 2.6-.2 2.4-2.2 4.3-4.6 4.3zm4.4-.4c1-1 1.6-2.3 1.7-3.8.1-1.2-.2-2.4-.8-3.5-1-1.8-2.9-2.9-4.9-3-.6 0-1.3 0-1.9.2l45.8-19.3-39.9 29.4z',
    }),
  )
}

NodewebkitPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NodewebkitPlain.defaultProps = {
  color: '#3D3B47',
  size: '128',
}

export default NodewebkitPlain