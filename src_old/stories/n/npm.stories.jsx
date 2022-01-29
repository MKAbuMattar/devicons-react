import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NPMOriginalWordmark } from '../../index'

const stories = storiesOf('npm', module)

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <NPMOriginalWordmark />
    </Fragment>
  )
})
