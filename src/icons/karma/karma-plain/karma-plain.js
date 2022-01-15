import { createElement } from 'react'
import PropTypes from 'prop-types'

const KarmaPlain = (props) => {
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
        'M77.281 89.582l19.625 37.84h31.02l-35.153-67.14-15.492 29.3m-62.535 20.29l14.367-17.497 22.973 35.047-14.746-70.3-12.45 26.472-10.144 26.277m0 0L37.34 57.117 22.977 74.625 0 39.575l14.746 70.296M124.97.391h-31.02l-19 36.285V.39H46.492v37.632l15.172 72.282 3.535 17.117h9.75V95.664L124.97.391',
    }),
  )
}

KarmaPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

KarmaPlain.defaultProps = {
  color: '#56C5A8',
  size: '128',
}

export default KarmaPlain
