import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ZigOriginal } from '../../index'

const stories = storiesOf('zig', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ZigOriginal />
    </Fragment>
  )
})
