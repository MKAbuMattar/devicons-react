import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NodeJSPlain } from '../../index'

const stories = storiesOf('nodejs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NodeJSPlain />
    </Fragment>
  )
})
