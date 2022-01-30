import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ConfluenceOriginal, ConfluenceOriginalWordmark } from '../../index'

const stories = storiesOf('confluence', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ConfluenceOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ConfluenceOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})
