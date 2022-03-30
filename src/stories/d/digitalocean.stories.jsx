import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DigitaloceanOriginal, DigitaloceanOriginalWordmark, DigitaloceanPlain, DigitaloceanPlainWordmark } from '../../index'

const stories = storiesOf('digitalocean', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DigitaloceanOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DigitaloceanOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DigitaloceanPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DigitaloceanPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
