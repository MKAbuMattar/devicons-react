import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TensorflowPlain } from '../../index'

const stories = storiesOf('tensorflow', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TensorflowPlain />
    </Fragment>
  )
})
