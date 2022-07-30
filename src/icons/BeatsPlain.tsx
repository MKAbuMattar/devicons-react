import * as React from 'react'
import { SVGProps } from 'react'

const SvgBeatsPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      fill="#07c"
      d="M12 0v80h44c17.078 0 31.613-10.719 37.352-25.781A39.85 39.85 0 0 0 96 40C96 17.906 78.094 0 56 0Zm60 48c2.973 0 5.934.336 8.828 1A39.938 39.938 0 0 0 72 48Zm9.086 1.055Zm4.5 1.351Zm17.219 12.086C94.398 79.914 76.609 92 56 92H12v36h60c22.09 0 40-17.914 40-40a39.835 39.835 0 0 0-9.195-25.508Zm0 0"
    />
  </svg>
)

export default SvgBeatsPlain