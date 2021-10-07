import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VisualStudioPlain } from '../../index'

const stories = storiesOf('visualstudio', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VisualStudioPlain />
    </Fragment>
  )
})
