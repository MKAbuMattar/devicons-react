import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ApacheLine, ApacheLineWordmark, ApacheOriginal, ApacheOriginalWordmark, ApachePlain, ApachePlainWordmark } from '../../index'

const stories = storiesOf('apache', module)

stories.add('line', () => {
  return (
    <Fragment>
      <ApacheLine />
    </Fragment>
  )
})

stories.add('line wordmark', () => {
  return (
    <Fragment>
      <ApacheLineWordmark />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <ApacheOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <ApacheOriginalWordmark />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ApachePlain />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <ApachePlainWordmark />
    </Fragment>
  )
})
