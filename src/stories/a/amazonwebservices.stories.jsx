import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AmazonwebservicesOriginal, AmazonwebservicesOriginalWordmark, AmazonwebservicesPlainWordmark } from '../../index'

const stories = storiesOf('amazonwebservices', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AmazonwebservicesOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AmazonwebservicesOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <AmazonwebservicesPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
