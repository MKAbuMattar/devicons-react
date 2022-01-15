import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Aarch64Plain } from '../../index'

const stories = storiesOf('aarch64', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <Aarch64Plain />
    </Fragment>
  )
})
