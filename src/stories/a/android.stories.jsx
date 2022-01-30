import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AndroidOriginal, AndroidOriginalWordmark, AndroidPlain, AndroidPlainWordmark } from '../../index'

const stories = storiesOf('android', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AndroidOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AndroidOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AndroidPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AndroidPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
