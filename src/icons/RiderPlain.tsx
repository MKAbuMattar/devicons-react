import * as React from 'react'
import { SVGProps } from 'react'

const SvgRiderPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="#010101" {...props}>
    <path d="M82.2 28.2h-7.4V55h7.4c6.9.5 12.9-5.1 13.4-12v-1.4c0-3.7-.9-6.9-3.7-9.7-2.7-2.8-6-4.2-9.7-3.7z" />
    <path d="M4.6 4.6v118.7h118.7V4.6H4.6zM19.4 19h20.3c4.6-.5 9.2 1.4 12.9 4.6 2.8 2.8 4.2 6.5 3.7 10.2.5 6.5-3.7 12-9.7 13.9l11.1 16.2H46.2l-9.7-14.3h-7.4v14.3h-9.7V19zm44.4 89.1H19.4v-7.4h44.4v7.4zm42-66.5c0 12.5-9.7 22.2-23.6 22.2H64.7V19h17.6c13.8 0 23.5 9.7 23.5 22.6z" />
    <path d="M46.7 34.7c0-4.2-2.8-6.5-7.9-6.5h-9.7v12.9h10.2c4.6-.4 7.4-2.7 7.4-6.4z" />
  </svg>
)

export default SvgRiderPlain
