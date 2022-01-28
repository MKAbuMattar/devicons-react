import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ApachekafkaOriginal, ApachekafkaOriginalWordmark } from '../../index'

const stories = storiesOf('apachekafka', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ApachekafkaOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ApachekafkaOriginalWordmark />
    </Fragment>
  )
})
