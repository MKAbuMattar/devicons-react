import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DockerPlain } from '../../index'

const stories = storiesOf('docker', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DockerPlain />
    </Fragment>
  )
})
