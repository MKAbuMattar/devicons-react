import { createElement } from 'react'
import PropTypes from 'prop-types'

const DjangoPlain = (props) => {
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
      d: 'M90.9 61.6l.1-2V59h-.8c-1.2 0-2.5.3-3.4.9-1.4.8-2.2 2.3-2.2 4.4 0 3 1.5 4.7 4.1 4.7.8 0 1.3-.1 2.3-.4v-4.3l-.1-2.7zm-74.6 2.6c0 3.2 1.6 4.9 4.7 4.9.7 0 1 0 2-.2v-9.5c-1-.2-1.2-.3-2-.3-3 0-4.7 1.9-4.7 5.1zm29.6 3.9c0 1.2.7 1.7 2.3 1.7.9 0 1.8-.1 2.8-.3v-4c-4 .4-5.1 1-5.1 2.6zm63-9.1c-2.3 0-3.7 1.9-3.7 5.2 0 3.3 1.3 5.2 3.7 5.2 2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2zM126 43.9c0-3.8-3.1-6.9-6.9-6.9H7.9C4.1 37 1 40.1 1 43.9V84c0 3.9 3.1 7 6.9 7H119c3.8 0 6.9-3.1 6.9-6.9V43.9zM10.3 64.3c0-6 4-10 10.2-10 1 0 1.6.1 2.6.3V46h6v27c-3 .6-5.3.8-7.7.8-7.3 0-11.1-3.2-11.1-9.5zM38 68.5c0 4.7-.2 7-1.2 9-1 1.9-2.1 3.1-4.7 4.4l-5.5-2.6c2.6-1.2 3.7-2.3 4.5-4 .8-1.7.9-3.7.9-8.8V55h6v13.5zM38 52h-6v-6h6v6zm18 21.3c-2 .4-5.8.7-8.3.7-5 0-7.1-1.7-7.1-5.6 0-4.2 3.3-6.1 10.3-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-5 .6-7 1.8v-4.6c3-1.2 5.1-1.8 7.8-1.8 3 0 4.8.8 5.7 2.4.5.9.5 2 .5 4.5v12.1zm21 .7h-6V62.2c0-2.3-1-3.1-3.1-3.1-.8 0-1.9.1-2.9.4V74h-6V55.7c4-.9 6.5-1.3 9.4-1.3 3 0 5.4.7 6.7 2C76.4 57.7 77 59 77 62v12zm19.3-11.6L97 68v1.7c0 5.1-.6 7.5-1.9 9.4-1.8 2.9-5.1 4.3-9.7 4.3-2.3 0-4.5-.3-6.5-1.2v-5.5c2 1.1 4.2 1.6 6.4 1.6 3.9 0 5.6-1.6 5.6-5.3v-.1c-1 .6-2.4.8-3.9.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2.3 4.3c-1.6-.3 1.3 0-.7-.2m12.1 14.8c-5.9 0-9.6-3.7-9.6-9.7 0-6.2 3.8-10.1 9.8-10.1 5.9 0 9.5 3.7 9.5 9.8.1 6.1-3.7 10-9.7 10z',
    }),
  )
}

DjangoPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DjangoPlain.defaultProps = {
  color: '#003A2B',
  size: '128',
}

export default DjangoPlain
