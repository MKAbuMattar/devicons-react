import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DartPlain } from '../../index'

const stories = storiesOf('dart', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DartPlain />
    </Fragment>
  )
})
