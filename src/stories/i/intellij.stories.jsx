import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { IntellijPlain } from '../../index'

const stories = storiesOf('intellij', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <IntellijPlain />
    </Fragment>
  )
})
