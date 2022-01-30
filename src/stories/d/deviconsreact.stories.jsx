import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DeviconsReactOriginal } from '../../index'

const stories = storiesOf('dev icons react', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DeviconsReactOriginal height="128" width="128" />
    </Fragment>
  )
})
