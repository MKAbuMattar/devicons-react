import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { UnixOriginal } from '../../index'

const stories = storiesOf('unix', module)

stories.add('original', () => {
  return (
    <Fragment>
      <UnixOriginal />
    </Fragment>
  )
})
