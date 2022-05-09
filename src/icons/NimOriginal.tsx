import * as React from 'react'
import { SVGProps } from 'react'

const SvgNimOriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      style={{
        fill: '#eec742',
        fillOpacity: 1,
        fillRule: 'nonzero',
        stroke: 'none',
      }}
      d="m109.398 88.598-16.98-12.453-28.645-5.29-28.644 5.29-16.98 12.453-4.403 8.87-6.234-11.94-4.801-20.13 8.23 3.41 9.606-7.163 5.492-11.258 9.262 7.164 19.55-2.73 8.922-8.528 8.918 8.527 19.555 2.73 9.262-7.163 5.488 11.258 9.606 7.164 8.234-3.41-4.805 20.128-6.23 11.942zm0 0"
      transform="translate(0 -28)"
    />
    <path
      style={{
        fill: '#000',
        fillOpacity: 1,
        fillRule: 'nonzero',
        stroke: 'none',
      }}
      d="m114.543 94.738-5.145-1.363-9.261 11.938-12.696 3.753-23.668-13.304-23.671 13.304-12.692-3.754-9.262-11.937L13 94.738l-5.488-9.554 10.636 30.023 15.95 15.012 29.675 8.187 29.672-8.187 15.953-15.012 10.633-30.023zm0 0"
      transform="translate(0 -28)"
    />
  </svg>
)

export default SvgNimOriginal
