import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ApachekafkaOriginal, ApachekafkaOriginalWordmark } from '../../index'

const stories = storiesOf('apachekafka', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ApachekafkaOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ApachekafkaOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})
