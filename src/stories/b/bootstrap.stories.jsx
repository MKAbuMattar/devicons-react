import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BootstrapOriginal, BootstrapPlain, BootstrapPlainWordmark } from '../../index'

const stories = storiesOf('bootstrap', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BootstrapOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <BootstrapPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <BootstrapPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
