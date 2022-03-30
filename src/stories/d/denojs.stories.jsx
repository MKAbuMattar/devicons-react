import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DenojsOriginal, DenojsOriginalWordmark } from '../../index'

const stories = storiesOf('denojs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DenojsOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DenojsOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})
