import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BackbonejsOriginal, BackbonejsOriginalWordmark, BackbonejsPlain, BackbonejsPlainWordmark } from '../../index'

const stories = storiesOf('backbonejs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BackbonejsOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <BackbonejsOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain', () => {
  return (
    <Fragment>
      <BackbonejsPlain height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <BackbonejsPlainWordmark height="128" width="128" />
    </Fragment>
  )
})

