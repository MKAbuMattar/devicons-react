import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DartOriginal, DartOriginalWordmark, DartPlain, DartPlainWordmark } from '../../index'

const stories = storiesOf('dart', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DartOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DartOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DartPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DartPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
