import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JasminePlain } from '../../index'

const stories = storiesOf('jasmine', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JasminePlain />
    </Fragment>
  )
})
