import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ApacheLine, ApacheLineWordmark, ApacheOriginal, ApacheOriginalWordmark, ApachePlain, ApachePlainWordmark } from '../../index'

const stories = storiesOf('apache', module)

stories.add('line', () => {
  return (
    <Fragment>
      <ApacheLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('line wordmark', () => {
  return (
    <Fragment>
      <ApacheLineWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <ApacheOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ApacheOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ApachePlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <ApachePlainWordmark height="128" width="128" />
    </Fragment>
  )
})
