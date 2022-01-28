import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AzureOriginal, AzureOriginalWordmark, AzurePlain, AzurePlainWordmark } from '../../index'

const stories = storiesOf('azure', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AzureOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AzureOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AzurePlain />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AzurePlainWordmark />
    </Fragment>
  )
})
