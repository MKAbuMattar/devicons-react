import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TravisPlain } from '../../index'

const stories = storiesOf('travis', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TravisPlain />
    </Fragment>
  )
})
