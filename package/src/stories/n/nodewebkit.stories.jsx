import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NodewebkitPlain } from '../../index'

const stories = storiesOf('nodewebkit', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NodewebkitPlain />
    </Fragment>
  )
})
