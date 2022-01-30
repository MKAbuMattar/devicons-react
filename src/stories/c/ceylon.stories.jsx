import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CeylonOriginal, CeylonOriginalWordmark, CeylonPlain, CeylonPlainWordmark } from '../../index'

const stories = storiesOf('ceylon', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CeylonOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CeylonOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CeylonPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CeylonPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
