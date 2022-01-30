import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BehanceOriginal, BehanceOriginalWordmark, BehancePlain, BehancePlainWordmark } from '../../index'

const stories = storiesOf('behance', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BehanceOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <BehanceOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <BehancePlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <BehancePlainWordmark height="128" width="128" />
    </Fragment>
  )
})
