import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ArduinoPlain } from '../../index'

const stories = storiesOf('arduino', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ArduinoPlain />
    </Fragment>
  )
})
