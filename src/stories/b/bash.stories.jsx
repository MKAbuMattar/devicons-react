import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BashOriginal, BashPlain } from '../../index'

const stories = storiesOf('bash', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BashOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <BashPlain height="128" width="128" />
    </Fragment>
  )
})
