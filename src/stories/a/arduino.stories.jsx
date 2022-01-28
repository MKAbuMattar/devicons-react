import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ArduinoOriginal, ArduinoOriginalWordmark, ArduinoPlain, ArduinoPlainWordmark } from '../../index'

const stories = storiesOf('arduino', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ArduinoOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ArduinoOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ArduinoPlain />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <ArduinoPlainWordmark />
    </Fragment>
  )
})
