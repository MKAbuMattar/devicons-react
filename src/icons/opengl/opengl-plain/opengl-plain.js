import { createElement } from 'react'
import PropTypes from 'prop-types'

const OpenGLPlain = (props) => {
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
    createElement('path', {
      fill: color,
      d:
        'M26.289 75.031c-6.137 0-9.203-3.645-10.387-7.453 1.336 6.191 8.555 12.23 31.27 14.91 21.473 2.543 35.465-3.848 40.199-6.828 0 0 3.191-1.363 1.277.746 0 0-13.508 12.129-40.094 12.285C22.02 88.816.926 75.828 1.086 62.648.957 49.523 22.02 36.504 48.555 36.609c26.531.125 40.094 12.281 40.094 12.281 1.914 2.105-1.277.75-1.277.75-4.719-2.969-18.676-8.82-40.199-6.828-21.207 1.984-28.094 8.98-30.41 13.652a13.44 13.44 0 00-1.383 5.242c.57-4.496 3.449-9.77 10.871-9.77 8.398 0 10.98 6.828 10.98 11.551s-2.574 11.5-10.98 11.5zm85.57-4.543h11.195v3.965h-15.93V52.555h4.707v17.91zm-17.277-7.824H104v11.813h-3.137l-.469-2.738c-1.195 1.34-2.926 3.324-7.051 3.324-5.437 0-10.387-3.777-10.387-11.445 0-5.984 3.422-11.605 11.031-11.605 6.891 0 9.633 4.359 9.902 7.352h-4.707c0-.852-1.605-3.598-4.93-3.598-3.359 0-6.461 2.258-6.461 7.875 0 5.988 3.359 7.512 6.566 7.512 1.035 0 4.488-.395 5.438-4.816h-5.242v-3.687zm-68.348-8.031c-4.898 0-7.855 3.746-7.855 8.926 0 5.148 2.949 8.926 7.855 8.926 4.898 0 7.859-3.75 7.859-8.926 0-5.152-2.949-8.926-7.859-8.926zm12.703 5.828h2.285v1.98h.055c.582-.805 1.68-2.387 4.301-2.387 3.832 0 6.566 3.152 6.566 7.09 0 3.344-1.988 7.719-6.891 7.719-1.93 0-3.195-.883-3.832-1.875h-.055v7.035H38.94V60.488zm6.133 12.395c2.648 0 4.441-2.23 4.441-5.305 0-1.801-.75-5.359-4.496-5.359-3.496 0-3.883 3.668-3.883 5.938 0 3.715 2.398 4.711 3.938 4.711zm21.742-2.762c-.082.672-.742 2.652-2.562 3.828-.66.43-1.598.969-3.91.969-4.055 0-6.457-2.973-6.457-7.039 0-4.336 2.152-7.77 6.941-7.77 4.16 0 6.188 3.215 6.188 8.191H56.465c0 2.922 1.402 4.602 4.191 4.602 2.289 0 3.637-1.707 3.719-2.754h2.43zm-2.57-3.715c-.141-2.172-1.078-4.176-4.027-4.176-2.234 0-4 2.004-4 4.176zm16.145 8.082h-2.426v-8.609c0-2.434-.719-3.664-3.09-3.664-1.379 0-3.805.855-3.805 4.656v7.613h-2.43V60.441h2.289v1.977h.055c.523-.75 1.871-2.383 4.355-2.383 2.23 0 5.043.883 5.043 4.875v9.504m47.376-.695a1.95 1.95 0 01-.277 1.012 1.97 1.97 0 01-.758.742 2.07 2.07 0 01-1.035.273c-.367 0-.711-.094-1.031-.273s-.57-.426-.758-.742a1.95 1.95 0 01-.277-1.012c0-.359.094-.699.277-1.016a2.02 2.02 0 01.758-.738 2.07 2.07 0 011.031-.27c.367 0 .719.09 1.035.27s.574.426.758.738a1.98 1.98 0 01.277 1.016zm-.398 0a1.53 1.53 0 00-.492-1.152c-.324-.324-.719-.484-1.176-.484s-.855.16-1.18.484a1.54 1.54 0 00-.488 1.152 1.55 1.55 0 00.488 1.156 1.62 1.62 0 001.18.477c.461 0 .852-.156 1.176-.477a1.57 1.57 0 00.492-1.156zm-2.605-1.086h.988c.277 0 .484.059.609.168s.188.262.188.445c0 .145-.047.27-.145.379-.094.102-.246.18-.453.23a.597.597 0 01.188.098.92.92 0 01.176.223 47.6 47.6 0 01.359.625h-.652l-.426-.738c-.07-.082-.145-.125-.215-.125-.02 0-.039.004-.07.008v.855h-.551zm.551.922h.238c.156 0 .27-.027.336-.078a.24.24 0 00.098-.195.23.23 0 00-.094-.191c-.062-.051-.168-.078-.32-.078h-.258zm0 0',
    }),
  )
}

OpenGLPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

OpenGLPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default OpenGLPlain
