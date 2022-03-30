import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BowerLine, BowerLineWordmark, BowerOriginal, BowerOriginalWordmark, BowerPlain, BowerPlainWordmark } from '../../index'

const stories = storiesOf('bower', module)

stories.add('line', () => {
  return (
    <Fragment>
      <BowerLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('line wordmark', () => {
  return (
    <Fragment>
      <BowerLineWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <BowerOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <BowerOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <BowerPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <BowerPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
