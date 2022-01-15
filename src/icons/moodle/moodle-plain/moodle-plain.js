import { createElement } from 'react'
import PropTypes from 'prop-types'

const MoodlePlain = (props) => {
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
        'M116.659 45.061c-5.075-3.895-12.286-5.754-21.087-5.754-9.648 0-16.383 2.199-19.939 6.77-1.626-1.76-3.659-3.162-5.963-4.229-2.444-2.479-4.981-3.986-7.574-4.717 5.754-3.695 12.497-8.684 21.036-15.426-34.694 3.555-51.459 6.94-81.245 24.881 1.219 0 2.396.006 3.546.02-.711 5.572-.341 13.883-.208 16.342-3.991 10.197-.406 18.488 2.579 25.945 0-8.979.44-16.244-2.109-25.557l20.25-16.051c-.326 3.025-.277 6.555.305 10.807l.063.021-.232 1.162.918.162c-.227 1.506.001 3.073.001 4.749V106h18V66.383c0-1.982.65-3.719 1.053-5.217 2.765-.465 5.64-1.256 8.167-2.338l.182.447c.162-.203.357-.447.515-.66 2.034-.908 4.166-2.014 6.001-3.316C64.178 56.986 66 60.654 66 66.383V106h21V66.383c0-8.123 2.4-12.182 9-12.182s9 4.059 9 12.182V106h21V64.186c0-8.463-3.419-14.725-9.341-19.125z',
    }),
  )
}

MoodlePlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoodlePlain.defaultProps = {
  color: '#F7931E',
  size: '128',
}

export default MoodlePlain
