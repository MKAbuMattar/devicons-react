import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppwriteOriginal, AppwriteOriginalWordmark, AppwritePlain, AppwritePlainWordmark } from '../../index'

const stories = storiesOf('appwrite', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppwriteOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AppwriteOriginalWordmark />
    </Fragment>
  )
})


stories.add('plain', () => {
  return (
    <Fragment>
      <AppwritePlain />
    </Fragment>
  )
})


stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AppwritePlainWordmark />
    </Fragment>
  )
})

