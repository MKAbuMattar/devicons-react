import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NumpyPlain } from '../../index'

const stories = storiesOf('numpy', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NumpyPlain />
    </Fragment>
  )
})
