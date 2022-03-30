import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AngularjsOriginal, AngularjsOriginalWordmark, AngularjsPlain, AngularjsPlainWordmark } from '../../index'

const stories = storiesOf('angularjs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AngularjsOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AngularjsOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AngularjsPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AngularjsPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
