import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CsharpLine, CsharpOriginal, CsharpPlain } from '../../index'

const stories = storiesOf('csharp', module)

stories.add('line', () => {
  return (
    <Fragment>
      <CsharpLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('original', () => {
  return (
    <Fragment>
      <CsharpOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <CsharpPlain height="128" width="128" />
    </Fragment>
  )
})
