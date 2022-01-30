import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CentosOriginal, CentosOriginalWordmark, CentosPlain, CentosPlainWordmark } from '../../index'

const stories = storiesOf('centos', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CentosOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CentosOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CentosPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CentosPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
