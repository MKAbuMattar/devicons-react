import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppceleratorOriginal, AppceleratorOriginalWordmark, AppceleratorPlainWordmark } from '../../index'

const stories = storiesOf('appcelerator', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppceleratorOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AppceleratorOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AppceleratorPlainWordmark />
    </Fragment>
  )
})

