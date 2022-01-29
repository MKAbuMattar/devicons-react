import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ProcessingPlain } from '../../index'

const stories = storiesOf('processing', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ProcessingPlain />
    </Fragment>
  )
})
