import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DenojsOriginal } from '../../index'

const stories = storiesOf('denojs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DenojsOriginal />
    </Fragment>
  )
})
