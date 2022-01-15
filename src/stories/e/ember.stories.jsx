import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { EmberOriginalWordmark } from '../../index'

const stories = storiesOf('ember', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <EmberOriginalWordmark />
    </Fragment>
  )
})
