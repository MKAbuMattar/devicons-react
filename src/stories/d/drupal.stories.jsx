import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DrupalOriginal, DrupalOriginalWordmark, DrupalPlain, DrupalPlainWordmark } from '../../index'

const stories = storiesOf('drupal', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DrupalOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DrupalOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain', () => {
  return (
    <Fragment>
      <DrupalPlain height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DrupalPlainWordmark height="128" width="128" />
    </Fragment>
  )
})

