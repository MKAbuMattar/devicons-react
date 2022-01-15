import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AndroidPlain } from '../../index'

const stories = storiesOf('android', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <AndroidPlain />
    </Fragment>
  )
})
