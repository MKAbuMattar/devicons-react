import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JestPlain } from '../../index'

const stories = storiesOf('jest', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JestPlain />
    </Fragment>
  )
})
