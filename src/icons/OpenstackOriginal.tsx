import * as React from 'react'
import { SVGProps } from 'react'

const SvgOpenstackOriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={128}
    height={128}
    {...props}
  >
    <defs>
      <clipPath id="openstack-original_svg__b">
        <path d="M0 0h128v128H0z" />
      </clipPath>
      <filter
        id="openstack-original_svg__a"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
      </filter>
      <mask id="openstack-original_svg__d">
        <g filter="url(#openstack-original_svg__a)">
          <path
            style={{
              fill: '#000',
              fillOpacity: 0.980392,
              stroke: 'none',
            }}
            d="M0 0h128v128H0z"
          />
        </g>
      </mask>
      <g id="openstack-original_svg__c" clipPath="url(#openstack-original_svg__b)">
        <path
          style={{
            stroke: 'none',
            fillRule: 'nonzero',
            fill: '#ed1944',
            fillOpacity: 1,
          }}
          d="M100.754 10.816H12.289c-5.57.016-10.078 4.528-10.098 10.094v23.797h24.543v-3.883a5.462 5.462 0 0 1 5.461-5.465h48.672a5.462 5.462 0 0 1 5.461 5.465v3.883h24.559V20.91c-.02-5.582-4.551-10.094-10.133-10.094ZM86.313 87.176a5.473 5.473 0 0 1-5.465 5.465H32.176a5.47 5.47 0 0 1-5.461-5.465v-3.883H2.175v23.789c.013 5.57 4.524 10.086 10.098 10.102h88.465c5.59.011 10.133-4.512 10.149-10.102V83.293H86.312ZM2.176 51.727h24.547v24.546H2.176ZM86.313 51.727h24.542v24.546H86.312Zm0 0"
        />
      </g>
    </defs>
    <use xlinkHref="#openstack-original_svg__c" mask="url(#openstack-original_svg__d)" />
    <path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#ed1944',
        fillOpacity: 1,
      }}
      d="M125.824 111.754a5.429 5.429 0 0 0-5.43-5.422 5.429 5.429 0 0 0-5.421 5.43 5.423 5.423 0 0 0 5.425 5.422 5.43 5.43 0 0 0 5.426-5.43Zm-5.426 4.094a4.093 4.093 0 1 1 0-8.188 4.093 4.093 0 1 1 0 8.188Zm0 0"
    />
    <path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#ed1944',
        fillOpacity: 1,
      }}
      d="M122.434 110.77v-.032a1.685 1.685 0 0 0-.45-1.23 1.984 1.984 0 0 0-1.445-.508h-1.984v5.309h1.093v-1.77h.676l.977 1.77h1.261l-1.132-1.977a1.609 1.609 0 0 0 1.004-1.562Zm-1.11.035a.766.766 0 0 1-.867.797h-.812v-1.606h.789c.59 0 .89.266.89.797Zm0 0"
    />
  </svg>
)

export default SvgOpenstackOriginal
