import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AtomOriginal, AtomOriginalWordmark } from '../../index'

const stories = storiesOf('atom', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AtomOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AtomOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})
