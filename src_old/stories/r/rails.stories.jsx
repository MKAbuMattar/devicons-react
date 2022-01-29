import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RailsPlain } from '../../index'

const stories = storiesOf('rails', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RailsPlain />
    </Fragment>
  )
})
