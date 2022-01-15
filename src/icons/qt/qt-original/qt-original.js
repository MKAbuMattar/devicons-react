import { createElement } from 'react'
import PropTypes from 'prop-types'

const QtOriginal = (props) => {
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
        'M17.576 17L-.242 34.688v76.226H110.39l17.816-17.687V17H115.86zm29.99 16.426c8.36 0 14.228 2.347 17.555 7.086 3.37 4.69 5.033 11.95 5.033 21.773 0 6.473-.7 11.688-2.054 15.645-1.403 3.996-3.634 7.039-6.787 9.125l6.83 10.91-8.364 3.867-7.222-11.777c-1.05.347-2.715.476-4.99.476-8.45 0-14.36-2.258-17.686-6.777-3.327-4.52-4.99-11.69-4.99-21.426 0-9.777 1.706-17.035 5.076-21.773 3.37-4.74 9.28-7.13 17.6-7.13zm33.926 3.172h8.805v11.691h11.207v7.477H90.297v17.773c0 3.305.258 5.477.74 6.563.482 1.086 1.75 1.609 3.723 1.609l6.652-.262.397 7.04c-3.634.694-6.393 1.042-8.317 1.042-4.599 0-7.753-1.043-9.459-3.129-1.707-2.086-2.584-6.039-2.584-11.863V55.811h-6.17v-7.522h6.213zm-33.88 4.695c-5.08 0-8.581 1.652-10.51 4.996-1.88 3.348-2.844 8.65-2.844 15.996 0 7.3.92 12.559 2.758 15.688 1.837 3.129 5.384 4.738 10.595 4.738 5.207 0 8.711-1.566 10.55-4.652 1.796-3.086 2.712-8.344 2.712-15.688 0-7.387-.917-12.734-2.8-16.082-1.88-3.344-5.342-4.996-10.462-4.996z',
      transform: 'matrix(.9965 0 0 1.00092 .241 -.016)',
    }),
    createElement('path', {
      fill: 'none',
      stroke: color,
      strokeWidth: '.004',
      d: 'M-5.736-.453h141.434v136H-5.736z',
    }),
  )
}

QtOriginal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

QtOriginal.defaultProps = {
  color: '#000000',
  size: '128',
}

export default QtOriginal
