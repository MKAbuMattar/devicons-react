import * as React from 'react'
import { SVGProps } from 'react'

const SvgAngularPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#000',
        fillOpacity: 1,
      }}
      d="M55.297 69.324h17.406L64 48.383ZM64 15.36l-47.668 17 7.27 63.028L64 117.762l40.398-22.375 7.27-63.028Zm29.746 78.133h-11.11L76.646 78.54h-25.29l-5.992 14.953h-11.11L64 26.676Zm0 0"
    />
  </svg>
)

export default SvgAngularPlain
