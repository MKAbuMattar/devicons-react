import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ArduinoOriginal, ArduinoOriginalWordmark, ArduinoPlain, ArduinoPlainWordmark } from '../../index'

const stories = storiesOf('arduino', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ArduinoOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ArduinoOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ArduinoPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <ArduinoPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
