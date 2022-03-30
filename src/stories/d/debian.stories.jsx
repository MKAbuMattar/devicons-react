import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DebianOriginal, DebianOriginalWordmark, DebianPlain, DebianPlainWordmark } from '../../index'

const stories = storiesOf('debian', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DebianOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DebianOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DebianPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DebianPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
