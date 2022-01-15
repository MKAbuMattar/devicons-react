import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GCCPlain } from '../../index'

const stories = storiesOf('gcc', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GCCPlain />
    </Fragment>
  )
})
