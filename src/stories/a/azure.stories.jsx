import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AzureOriginal, AzureOriginalWordmark, AzurePlain, AzurePlainWordmark } from '../../index'

const stories = storiesOf('azure', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AzureOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AzureOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AzurePlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AzurePlainWordmark height="128" width="128" />
    </Fragment>
  )
})
