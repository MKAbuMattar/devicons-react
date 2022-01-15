import { createElement } from 'react'
import PropTypes from 'prop-types'

const MSDosPlain = (props) => {
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
          'M79.435 38.806v3.016h3.109v2.922h8.953v-2.547h-3.016v-3.391zm12.063-9.707v-5.656h-8.949v5.656zm0 0',
      }),
      createElement('path', {
        d:
          'M94.611 14.017H79.435v3.02h-6.316v3.297h-3.016v12.063h3.016v3.016h6.316v3.016h9.426v3.395h3.016v3.297H82.17v-2.922h-3.11v-3.391h-8.953v9.047h3.016v3.203h3.297v3.109h21.395v-3.109h3.109v-3.203h3.301v-9.047h-3.301V35.79h-3.109v-3.016h-6.316v-3.301h-9.328v-6.406h9.707v6.031h12.348v-8.766h-3.301v-3.297h-6.312zm0 0',
      }),
      createElement('path', {
        d:
          'M79.248 13.548h15.738v3.109h6.316v3.297h3.297v9.52H91.876v2.922h6.41v3.016h3.016v3.016h3.297v9.801h-3.297v3.301h-3.016v3.016H76.044V51.53h-3.297v-3.301h-3.016v-9.801h9.328V35.79h-6.312v-3.016h-3.016V19.958h3.016v-3.301h6.313v-3.109zm-59.469 0h12.629v3.109h3.301v6.41h3.109v6.031h3.016v6.313h2.828v-6.313h3.297v-6.031h3.016v-6.41h3.016v-3.109h13.102v40.996H53.99V42.197h-2.637v6.031h-3.016v6.316h-9.992v-6.316H35.33v-6.031h-2.922v12.348H19.591V13.548zm0 0',
      }),
      createElement('path', {
        d:
          'M38.345 73.298h-5.937V94.88h9.047v-6.031h-3.109zm28.273 0H63.79v18.379h2.828V88.47h3.109v-3.109h6.316v-2.637h-3.301v-3.016h-3.016v-3.016h-3.109zM94.61 88.849h-5.75v2.828h5.75zM16.763 51.056h31.574v3.109h2.637v-3.109h22.148v3.109h2.922v-3.109h22.238v3.109h6.316v3.016h3.016v3.488h3.109v9.613h-3.109v3.016h-9.332v2.922h6.316v3.109h3.016v3.016h3.109v22.148h-3.109v3.109h-3.016v3.109h-6.316v3.109H79.06v-3.109h-2.641v3.109H53.99v-3.109h-5.652v3.109H16.482V51.056zm81.051 21.863v-2.637h-3.203v-3.395h-2.734v6.031zm0 0',
      }),
      createElement('path', {
        d:
          'M60.587 16.845h3.016v34.398h-3.016zm-6.41 12.441h3.113v3.297h-3.113zM29.205 16.845h3.016v3.301h-3.016zm3.016 6.41h3.297v2.922H32.22zm3.297 6.031h3.113v3.297h-3.113zm3.113 6.313h3.016v3.016H38.63zm3.016 6.41h3.203v2.922h-3.203zM26.189 26.177v25.066h3.016v-18.66h3.016v-3.297h-3.016v-3.109zm0 0',
      }),
    ),
  )
}

MSDosPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MSDosPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default MSDosPlain