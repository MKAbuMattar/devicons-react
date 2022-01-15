import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SSHOriginal } from '../../index'

const stories = storiesOf('ssh', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SSHOriginal />
    </Fragment>
  )
})
