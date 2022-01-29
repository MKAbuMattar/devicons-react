import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { StylusOriginal } from '../../index'

const stories = storiesOf('stylus', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <StylusOriginal />
    </Fragment>
  )
})
