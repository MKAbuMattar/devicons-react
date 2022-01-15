import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SwiftPlain } from '../../index'

const stories = storiesOf('swift', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SwiftPlain />
    </Fragment>
  )
})
