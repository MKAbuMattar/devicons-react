import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RaspberrypiLine } from '../../index'

const stories = storiesOf('raspberrypi', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RaspberrypiLine />
    </Fragment>
  )
})
