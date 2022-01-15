import { createElement } from 'react'
import PropTypes from 'prop-types'

const TowergitPlain = (props) => {
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
          'M85.512 48.8l-.586-3.277a.353.353 0 00-.352-.296h-40.96a.353.353 0 00-.352.296l-.586 3.278zm0 0',
      }),
      createElement('path', {
        d:
          'M37.71 20.625H90.5l-.727-2.7a.411.411 0 00-.398-.3H38.727a.43.43 0 00-.403.313zm0 0',
      }),
      createElement('path', {
        d:
          'M83.61 45.23H44.585v-1.42h39.023zM71.613 30.04h1.524v13.773h-1.524zm-16.562 0h1.523v13.773h-1.523zm0 0',
      }),
      createElement('path', {
        d: 'M82.09 30.04h1.523v13.773H82.09zm-37.505-.003h1.524V43.81h-1.524z',
      }),
      createElement('path', {
        d:
          'M97.836 63.125l-1.46-5.898a.718.718 0 00-.7-.55h-63.2a.712.712 0 00-.703.55l-1.449 5.9a.348.348 0 00.05.287L41.461 80.3a.68.68 0 00.562.3h44.14a.681.681 0 00.564-.3l11.085-16.887c.024-.09.05-.187.024-.29zm-61.999-7.361c.108-.434 1.049-5.667 1.05-5.833 0-.065 12.237-.118 27.192-.118l27.192.05c0 .028.247 1.393.55 3.034L92.372 56c.001.065-12.739.118-28.311.118H35.749zm-.054-26.426c0-.077-.248-1.757-.552-3.733l-.552-3.722c0-.071 13.251-.129 29.446-.129h29.446l-.59 3.823-.599 3.862c-.028.119-56.601.018-56.601-.101zm10.124 77.924l-.35-.245V80.709h37.044v26.308l-.35.245c-.312.219-2.297.245-18.172.245s-17.86-.027-18.172-.245zm1.962 2.821c-.058-.058-.106-.555-.106-1.104v-.998h32.33l-.047 1.064-.047 1.064-16.012.04c-8.807.022-16.06-.007-16.118-.066z',
      }),
    ),
  )
}

TowergitPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

TowergitPlain.defaultProps = {
  color: '#ffc600',
  size: '128',
}

export default TowergitPlain
