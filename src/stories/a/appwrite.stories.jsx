import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppwriteOriginal, AppwriteOriginalWordmark, AppwritePlain, AppwritePlainWordmark } from '../../index'

const stories = storiesOf('appwrite', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppwriteOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AppwriteOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain', () => {
  return (
    <Fragment>
      <AppwritePlain height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AppwritePlainWordmark height="128" width="128" />
    </Fragment>
  )
})

