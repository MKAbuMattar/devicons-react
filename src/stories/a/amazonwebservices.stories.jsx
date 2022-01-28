import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AmazonwebservicesOriginal, AmazonwebservicesOriginalWordmark, AmazonwebservicesPlainWordmark } from '../../index'

const stories = storiesOf('amazonwebservices', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AmazonwebservicesOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AmazonwebservicesOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AmazonwebservicesPlainWordmark />
    </Fragment>
  )
})
