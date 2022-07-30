import { Fragment } from 'react'

import * as DevIconsReact from 'devicons-react'

const ListIcons = ({ componentName }) => {
  const Component = DevIconsReact[componentName || 'DeviconsReactOriginal']

  return (
    <Fragment>
      <Component />
    </Fragment>
  )
}

export default ListIcons
