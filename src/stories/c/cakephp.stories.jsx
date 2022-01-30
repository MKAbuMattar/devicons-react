import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CakephpOriginal, CakephpOriginalWordmark, CakephpPlain, CakephpPlainWordmark } from '../../index'

const stories = storiesOf('cakephp', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CakephpOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CakephpOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CakephpPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CakephpPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
