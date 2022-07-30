import * as React from 'react'
import { SVGProps } from 'react'

const SvgBallerinaLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlSpace="preserve" width={128} height={128} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      className="ballerina-line_svg__st0"
      d="M38.254 43.52V17.314h21.944v34.598zm0 19.692 15.02-5.743-15.02-5.744zm0 8.205v39.27H49.53l10.668-34.969V63.025ZM89.746 43.52V17.314H67.802v34.598zm0 8.205-15.02 5.744 15.02 5.743zm-21.944 11.3v12.693l10.668 34.968h11.276v-39.27Z"
      style={{
        opacity: 1,
        mixBlendMode: 'overlay',
        strokeWidth: 1,
        strokeDasharray: 'none',
        fill: 'none',
        stroke: '#46c0bc',
        strokeOpacity: 1,
        paintOrder: 'markers fill stroke',
        fillOpacity: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'round',
      }}
    />
  </svg>
)

export default SvgBallerinaLine
