import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ChromeOriginal, ChromeOriginalWordmark, ChromePlain, ChromePlainWordmark } from '../../index'

const stories = storiesOf('chrome', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ChromeOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ChromeOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ChromePlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <ChromePlainWordmark height="128" width="128" />
    </Fragment>
  )
})
