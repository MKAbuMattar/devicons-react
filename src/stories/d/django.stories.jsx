import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DjangoLine, DjangoOriginal, DjangoPlain } from '../../index'

const stories = storiesOf('django', module)

stories.add('line', () => {
  return (
    <Fragment>
      <DjangoLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <DjangoOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DjangoPlain height="128" width="128" />
    </Fragment>
  )
})
