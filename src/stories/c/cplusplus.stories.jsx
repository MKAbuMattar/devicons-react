import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CplusplusLine, CplusplusOriginal, CplusplusPlain } from '../../index'

const stories = storiesOf('cplusplus', module)

stories.add('line', () => {
  return (
    <Fragment>
      <CplusplusLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <CplusplusOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CplusplusPlain height="128" width="128" />
    </Fragment>
  )
})
