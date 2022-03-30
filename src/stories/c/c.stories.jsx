import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CLine, COriginal, CPlain } from '../../index'

const stories = storiesOf('c', module)

stories.add('line', () => {
  return (
    <Fragment>
      <CLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <COriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CPlain height="128" width="128" />
    </Fragment>
  )
})
