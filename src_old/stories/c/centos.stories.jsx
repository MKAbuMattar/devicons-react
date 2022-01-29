import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CentosPlain } from '../../index'

const stories = storiesOf('centos', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CentosPlain />
    </Fragment>
  )
})
