import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AtomOriginal, AtomOriginalWordmark } from '../../index'

const stories = storiesOf('atom', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AtomOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AtomOriginalWordmark />
    </Fragment>
  )
})
