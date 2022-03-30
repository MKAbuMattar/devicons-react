import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DoctrineLine, DoctrineLineWordmark, DoctrineOriginal, DoctrineOriginalWordmark, DoctrinePlain, DoctrinePlainWordmark } from '../../index'

const stories = storiesOf('doctrine', module)

stories.add('line', () => {
  return (
    <Fragment>
      <DoctrineLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('line wordmark', () => {
  return (
    <Fragment>
      <DoctrineLineWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <DoctrineOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DoctrineOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DoctrinePlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <DoctrinePlainWordmark height="128" width="128" />
    </Fragment>
  )
})
