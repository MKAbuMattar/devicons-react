import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FoundationPlain } from '../../index'

const stories = storiesOf('foundation', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FoundationPlain />
    </Fragment>
  )
})
