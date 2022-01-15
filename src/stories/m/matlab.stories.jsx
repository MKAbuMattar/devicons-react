import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MatlabPlain } from '../../index'

const stories = storiesOf('matlab', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MatlabPlain />
    </Fragment>
  )
})
