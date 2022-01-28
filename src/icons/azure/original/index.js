import { createElement } from 'react'
import PropTypes from 'prop-types'

const AzurePlain = (props) => {
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
      'defs',
      null,
      createElement(
        'linearGradient',
        {
          id: 'azure-original-a',
          gradientUnits: 'userSpaceOnUse',
          x1: '60.919',
          x2: '18.667',
          y1: '9.602',
          y2: '134.423',
        },
        createElement('stop', { stopColor: '#114A8B' }),
        createElement('stop', { offset: '1', stopColor: '#0669BC' }),
      ),
      createElement(
        'linearGradient',
        {
          id: 'azure-original-b',
          gradientUnits: 'userSpaceOnUse',
          x1: '74.117',
          x2: '64.344',
          y1: '67.772',
          y2: '71.076',
        },
        createElement('stop', { stopOpacity: '.3' }),
        createElement('stop', { offset: '.071', stopOpacity: '.2' }),
        createElement('stop', { offset: '.321', stopOpacity: '.1' }),
        createElement('stop', { offset: '.623', stopOpacity: '.05' }),
        createElement('stop', { offset: '1', stopOpacity: '0' }),
      ),
      createElement(
        'linearGradient',
        {
          id: 'azure-original-c',
          gradientUnits: 'userSpaceOnUse',
          x1: '68.742',
          x2: '115.122',
          y1: '5.961',
          y2: '129.525',
        },
        createElement('stop', { stopColor: '#3CCBF4' }),
        createElement('stop', { offset: '1', stopColor: '#2892DF' }),
      ),
    ),
    createElement('path', {
      d: 'M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z',
      fill: 'url(#azure-original-a)',
      transform: 'translate(.587 4.468) scale(.91904)',
    }),
    createElement('path', {
      fill: '#0078d4',
      d: 'M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z',
    }),
    createElement('path', {
      fill: 'url(#azure-original-b)',
      d: 'M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z',
      transform: 'translate(.587 4.468) scale(.91904)',
    }),
    createElement('path', {
      fill: 'url(#azure-original-c)',
      d: 'M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z',
      transform: 'translate(.587 4.468) scale(.91904)',
    }),
  )
}

AzurePlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

AzurePlain.defaultProps = {
  color: '#474747',
  size: '128',
}

export default AzurePlain
