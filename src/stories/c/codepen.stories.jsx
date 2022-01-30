import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CodepenOriginalWordmark, CodepenPlain } from '../../index'

const stories = storiesOf('codepen', module)

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CodepenOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CodepenPlain height="128" width="128" />
    </Fragment>
  )
})
