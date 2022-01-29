import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AndroidOriginal, AndroidOriginalWordmark, AndroidPlain, AndroidPlainWordmark } from '../../index'

const stories = storiesOf('android', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AndroidOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AndroidOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AndroidPlain />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AndroidPlainWordmark />
    </Fragment>
  )
})
