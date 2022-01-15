import { createElement } from 'react'
import PropTypes from 'prop-types'

const RubyMinePlain = (props) => {
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
          'M118 97.51c-1.19-2-12.23-18.28-13.13-20.23l-.33-.69.6-.47a39.57 39.57 0 0015.18-31.47V43.6c0-8.71-2.82-17-7.75-22.81-5.72-6.79-14-10.79-23.48-11.5v25.2c5 1.54 8.38 6.53 8.38 13.07 0 7.42-5.32 11.36-9.79 14.22l-1.78 1.15a14 14 0 00-6 11.91 22.11 22.11 0 001.72 8.29l1.55 2.93 16.2 25 .26.44 2.18 3.42a9.67 9.67 0 005.61 3.89 11.29 11.29 0 009.3-1.8 10.92 10.92 0 004.56-7.38l.19-2.08A19.64 19.64 0 00118 97.51z',
      }),
      createElement('path', {
        d:
          'M83.87 9a32.38 32.38 0 00-8.46 1.83c-.24.09-.47.21-.71.3-.82.32-1.64.65-2.43 1-.31.15-.6.33-.91.49-.79.42-1.6.8-2.36 1.28a34.43 34.43 0 00-5.35 4.15A32.84 32.84 0 0041 8.86C22 8.86 6.55 25.48 6.55 46a.66.66 0 000 .12V117H30V46.1a.84.84 0 010-.1c0-6.55 4.92-11.85 11-11.85S51.92 39.4 52 45.9v.1a.68.68 0 000 .12v70.89h23.32v-70.9-.08-.1c0-.32.06-.61.09-.92v-.61a11.47 11.47 0 018.42-9.87V9z',
      }),
    ),
  )
}

RubyMinePlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

RubyMinePlain.defaultProps = {
  color: '#c12c4c',
  size: '128',
}

export default RubyMinePlain
