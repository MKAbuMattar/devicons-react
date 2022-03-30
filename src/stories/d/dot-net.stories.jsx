import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DotNetOriginal, DotNetOriginalWordmark, DotNetPlain, DotNetPlainWordmark } from '../../index'

const stories = storiesOf('dot-net', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DotNetOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DotNetOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DotNetPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DotNetPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
