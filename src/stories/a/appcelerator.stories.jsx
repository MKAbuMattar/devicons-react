import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppceleratorOriginal, AppceleratorOriginalWordmark, AppceleratorPlainWordmark } from '../../index'

const stories = storiesOf('appcelerator', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppceleratorOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AppceleratorOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AppceleratorPlainWordmark height="128" width="128" />
    </Fragment>
  )
})

