import * as React from 'react'
import { SVGProps } from 'react'

const SvgClionPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} {...props}>
    <path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#000',
        fillOpacity: 1,
      }}
      d="M0 0v128h128V0Zm37.55 16c.391-.008.782-.008 1.169 0 9.922 0 16 3.2 20.8 8.32l-7.359 8.64c-4.16-3.838-8.32-6.08-13.44-6.08-8.957 0-15.36 7.36-15.36 16.64 0 8.961 6.403 16.641 15.36 16.641 6.082 0 9.922-2.558 14.082-6.082l7.36 7.363C54.718 67.2 48.64 71.04 38.397 71.04a27.2 27.2 0 0 1-19.347-8.078 27.205 27.205 0 0 1-7.852-19.441C10.871 28.645 22.668 16.316 37.547 16Zm30.606.64H80v43.2h23.04v9.922H68.16V16.64ZM12.16 104h48v8h-48Zm0 0"
    />
  </svg>
)

export default SvgClionPlain
