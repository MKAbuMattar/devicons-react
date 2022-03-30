import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Css3Original, Css3OriginalWordmark, Css3Plain, Css3PlainWordmark } from '../../index'

const stories = storiesOf('css3', module)

stories.add('original', () => {
  return (
    <Fragment>
      <Css3Original height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <Css3OriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <Css3Plain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <Css3PlainWordmark height="128" width="128" />
    </Fragment>
  )
})
