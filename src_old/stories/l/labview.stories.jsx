import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { LabviewPlain } from '../../index'

const stories = storiesOf('labview', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <LabviewPlain />
    </Fragment>
  )
})
