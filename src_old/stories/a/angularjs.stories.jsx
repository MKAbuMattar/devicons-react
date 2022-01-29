import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AngularjsOriginal, AngularjsOriginalWordmark, AngularjsPlain, AngularjsPlainWordmark } from '../../index'

const stories = storiesOf('angularjs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AngularjsOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AngularjsOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AngularjsPlain />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AngularjsPlainWordmark />
    </Fragment>
  )
})
