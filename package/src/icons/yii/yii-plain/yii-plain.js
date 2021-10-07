import { createElement } from 'react'
import PropTypes from 'prop-types'

const YiiPlain = (props) => {
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
        'M107.131 1.228c-14.253.534-31.578 18.435-25.65 35.13 6.275 16.565 10.296 28.348 11.137 46.83 15.062-15.155 28.901-31.609 30.018-50.7.366-15.493-6.967-26.911-15.505-31.26zM69.549 70.012c-2.139 3.823-4.946 7.978-8.606 12.528-7.691 9.693-15.446 25.593-13.061 44.232 31.771-3.506 41.693-27.353 42.563-40.457-5.987-9.034-16.85-14.596-20.896-16.303zM5.477 12.815c-1.128 14.583 5.11 36.267 30.397 43.169 10.648 3.153 18.109 5.096 26.186 8.028 11.809 4.291 21.078 9.768 28.422 19.221-1.363-16.265-8.062-34.902-18.759-49.441C56.462 13.052 30.034 3.097 5.477 12.815z',
    }),
  )
}

YiiPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

YiiPlain.defaultProps = {
  color: '#0073BB',
  size: '128',
}

export default YiiPlain
